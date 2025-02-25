
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TextureMesh: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { clock, mouse, gl } = state;
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      material.uniforms.u_time.value = clock.getElapsedTime();
      const c = gl.domElement.getBoundingClientRect();
      material.uniforms.u_resolution.value = [c.width, c.height];
    }
    });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry args={[1024, 1024]} />
      <shaderMaterial
        fragmentShader={`
          uniform vec2 u_resolution;
          uniform float u_time;
          uniform vec3 u_color;
          uniform vec4 u_background;
          uniform float u_speed;
          uniform float u_detail;
          
          // Función de rotación
          mat2 m(float a) {
            float c = cos(a), s = sin(a);
            return mat2(c, -s, s, c);
          }
          
          #ifndef FNC_RGB2LUMA
          #define FNC_RGB2LUMA
          float rgb2luma(in vec3 color) {
            return dot(color, vec3(0.299, 0.587, 0.114));
          }
          float rgb2luma(in vec4 color) {
            return rgb2luma(color.rgb);
          }
          #endif
          
          #ifndef FNC_LUMA
          #define FNC_LUMA
          float luma(float v) { return v; }
          float luma(in vec3 v) { return rgb2luma(v); }
          float luma(in vec4 v) { return rgb2luma(v.rgb); }
          #endif
          
          float map(vec3 p) {
            float t = u_time * u_speed;
            p.xz *= m(t * 0.4);
            p.xy *= m(t * 0.1);
            vec3 q = p * 2.0 + t;
            return length(p + vec3(sin((t * u_speed) * 0.1))) * log(length(p) + 0.9) +
                   cos(q.x + sin(q.z + cos(q.y))) * 0.5 - 1.0;
          }
          
          void main() {
            vec2 a = gl_FragCoord.xy / u_resolution.x - vec2(0.5, 0.5);
            vec3 cl = vec3(0.0);
            float d = 2.5;
            
            for (float i = 0.0; i <= (1.0 + 20.0 * u_detail); i++) {
              vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
              float rz = map(p);
              float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
              vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
              cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.6 * l;
              d += min(rz, 1.0);
            }
            
            vec4 color = vec4(min(u_color, cl), 1.0);
            color.r = max(u_background.r, color.r);
            color.g = max(u_background.g, color.g);
            color.b = max(u_background.b, color.b);
            gl_FragColor = color;
          }
        `}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          u_color: { value: new THREE.Color(0xeae947) },
          u_background: {
            value: new THREE.Vector4(
              0.09019607843137255,
              0.14901960784313725,
              0.11764705882352941,
              1
            ),
          },
          u_speed: { value: 0.1 },
          u_detail: { value: 0.118 },
          u_time: { value: 0 },
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [1024, 1024] },
        }}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const ShaderCanvas: React.FC = () => {
  return (
    <Canvas
      gl={{
        preserveDrawingBuffer: true,
        premultipliedAlpha: false,
        alpha: true,
        //transparent: true,
        antialias: true,
        precision: "highp",
        powerPreference: "high-performance",
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      style={{ height: "100%", width: "100%" }}
    >
      <TextureMesh />
    </Canvas>
  );
};

export default ShaderCanvas;
