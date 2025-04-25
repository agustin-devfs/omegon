"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TextureMesh: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse, gl }) => {
    if (mesh.current) {
      const mat = mesh.current.material as THREE.ShaderMaterial;
      mat.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      mat.uniforms.u_time.value = clock.getElapsedTime();
      const { width, height } = gl.domElement.getBoundingClientRect();
      mat.uniforms.u_resolution.value = [width, height];
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>      
      <planeGeometry args={[1024, 1024]} />
      <shaderMaterial
        fragmentShader={
`// Fragment shader

// Uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[4];
uniform float u_blur;
uniform bool u_animate;
uniform float u_animate_speed;
uniform float u_frequency;

#define S(a,b,t) smoothstep(a,b,t)

#ifndef SRGB_EPSILON
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_SRGB2RGB
#define FNC_SRGB2RGB
float srgb2rgb(float c) { return (c<0.04045)?c*0.07739938:pow((c+0.055)*0.9478673,2.4); }
vec3 srgb2rgb(vec3 c){return vec3(srgb2rgb(c.r+SRGB_EPSILON),srgb2rgb(c.g+SRGB_EPSILON),srgb2rgb(c.b+SRGB_EPSILON));}
vec4 srgb2rgb(vec4 c){return vec4(srgb2rgb(c.rgb),c.a);} 
#endif

#ifndef saturate
#define saturate(x) clamp(x,0.0,1.0)
#endif

#ifndef FNC_RGB2SRGB
#define FNC_RGB2SRGB
float rgb2srgb(float c){return (c<0.0031308)?c*12.92:1.055*pow(c,0.4166667)-0.055;}
vec3 rgb2srgb(vec3 c){return saturate(vec3(rgb2srgb(c.r),rgb2srgb(c.g),rgb2srgb(c.b)));}
vec4 rgb2srgb(vec4 c){return vec4(rgb2srgb(c.rgb),c.a);} 
#endif

#ifndef FNC_MIXOKLAB
#define FNC_MIXOKLAB
vec3 mixOklab(vec3 A,vec3 B,float h){A=srgb2rgb(A);B=srgb2rgb(B);
 const mat3 m1=mat3(0.4121656,0.2118591,0.08830979,0.5362752,0.680719,0.2818474,0.05145756,0.1074066,0.6302614);
 const mat3 m2=mat3(4.0767245,-1.2681438,-0.004112,-3.3072169,2.6093323,-0.7034763,0.2307591,-0.3411344,1.7068626);
 vec3 l1=pow(m1*A,vec3(1./3.));vec3 l2=pow(m1*B,vec3(1./3.));vec3 l=mix(l1,l2,h);
 return rgb2srgb(m2*(l*l*l));}
vec4 mixOklab(vec4 A,vec4 B,float h){return vec4(mixOklab(A.rgb,B.rgb,h),mix(A.a,B.a,h));}
#endif

mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 

vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);
 return mix(mix(dot(-1.0+2.0*hash(i),f),dot(-1.0+2.0*hash(i+vec2(1,0)),f-vec2(1,0)),u.x),
            mix(dot(-1.0+2.0*hash(i+vec2(0,1)),f-vec2(0,1)),dot(-1.0+2.0*hash(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);
}

void main(){
 vec2 uv=gl_FragCoord.xy/u_resolution;
 vec2 tuv=uv-0.5;
 float ratio=u_resolution.x/u_resolution.y;
 float speed=u_animate?u_time*10.0*u_animate_speed:0.0;
 float degree=noise(vec2(speed/100.0,tuv.x*tuv.y));
 tuv.y*=1./ratio;
 tuv*=Rot(radians((degree-0.5)*720.0+180.0));
 tuv.y*=ratio;
 float freq=20.0*u_frequency;
 float amp=30.0*(10.0*(0.01+u_blur));
 tuv.x+=sin(tuv.y*freq+speed)/amp;
 tuv.y+=sin(tuv.x*freq*1.5+speed)/(amp*0.5);
 vec4 l1=mixOklab(u_colors[0],u_colors[1],S(-0.3,0.2,(tuv*Rot(radians(-5.0))).x));
 vec4 l2=mixOklab(u_colors[2],u_colors[3],S(-0.3,0.2,(tuv*Rot(radians(-5.0))).x));
 vec4 comp=mixOklab(l1,l2,S(0.5,-0.3,tuv.y));
 gl_FragColor=comp;
}`
        }
        vertexShader={
`void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`
        }
        uniforms={{
          u_colors: { value: [
            new THREE.Vector4(0.2823,0.4510,0.2353,1),
            new THREE.Vector4(0.9294,0.9490,0.3216,1),
            new THREE.Vector4(0.9294,0.9490,0.3216,1),
            new THREE.Vector4(0.2823,0.4510,0.2353,1)
          ]},
          u_blur: { value: 0.221 },
          u_animate: { value: true },
          u_animate_speed: { value: 0.14 },
          u_frequency: { value: 0.177 },
          u_time: { value: 0 },
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [window.innerWidth, window.innerHeight] }
        }}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const ShaderCanvas: React.FC = () => (
  <Canvas
    gl={{ preserveDrawingBuffer: true, premultipliedAlpha: false, alpha: true, antialias: true, precision: "highp", powerPreference: "high-performance" }}
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
    style={{ width: "100%", height: "100%" }}
  >
    <TextureMesh />
  </Canvas>
);

export default ShaderCanvas;
