export const content = {
  Whatsapp_Text_Link: "hi!",

  cards: [
    {
      title: "Desarrollo Web",
      description:
        "Llevamos tu visión al mundo digital con plataformas web sólidas, innovadoras y estratégicas, diseñadas para impulsar tu crecimiento.",
      iconSrc: "https://cdn.lordicon.com/ogjpwrxe.json", // Omega Icon
      imageSrc: "/assets/notebook.png",
      imageAlt: "Omega",
      linkNav: "#services",
    },
    {
      title: "Desarrollo de Apps",
      description:
        "Creamos aplicaciones a medida que combinan tecnología y creatividad, ofreciendo soluciones eficientes y adaptadas a las necesidades del mercado.",
      iconSrc: "https://cdn.lordicon.com/srupsmbe.json", // Alpha Icon
      imageSrc: "/assets/telefono.png",
      imageAlt: "Gamma",
      linkNav: "#services",
    },
    {
      title: "Diseño UX/UI",
      description:
        "Diseñamos experiencias intuitivas y atractivas que generan conexión con los usuarios y potencian la identidad de tu marca.",
      iconSrc: "https://cdn.lordicon.com/rszslpey.json", // Gamma Icon
      imageSrc: "/assets/tablet.png",
      imageAlt: "Alpha",
      linkNav: "#services",
    },
  ],

  teamMembers: [
    {
      name: "Agustin Rodriguez",
      description:
        "Profesional con mas de 10 años de experiencia en el manejo de proyectos, especializado en desarrollo de software y tecnología. ",
      image: "/assets/images/agus.jpg",
    },
    {
      name: "Eugenia Galleguillo",
      description:
        "Licenciada en Comunicación y apasionada por el diseño gráfico, encuentro en la creatividad una forma de dar vida a ideas y conectar con las personas a través de lo visual.",
      image: "/assets/images/euge.jpg",
    },
  ],
};

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const projects: Project[] = [
  {title: "proyectos", id: 0, description: "", imageUrl: "", link: ""},
  {
    id: 1,
    title: "Yamila Velay",
    description:
      "Identidad visual espiritual y funcionalidad personalizada para una terapeuta holística.",
    imageUrl: "/assets/projects/yami.svg",
    link: "https://yamila-velay-landing.vercel.app/",
  },
  {
    id: 2,
    title: "Ocho&5",
    description:
      "Diseño minimalista combinado con una experiencia de usuario fluida para una empresa de marketing.",
    imageUrl: "/assets/telefono.png",
    link: "https://cinco-y-ocho.vercel.app/",
  },
  {
    id: 3,
    title: "Lead Magnet",
    description:
      "Proyecto con diseño simple fluido para empresa de IA & automation.",
    imageUrl: "/assets/telefono.png",
    link: "https://aiqwavelabscom.vercel.app/",
  },
];

export const diseños: Project[] = [
  {title: "diseños", id: 0, description: "", imageUrl: "", link: ""},
  {
    id: 1,
    title: "Yamila Velay",
    description:
      "Identidad visual espiritual y funcionalidad personalizada para una terapeuta holística.",
    imageUrl: "/assets/projects/yami.svg",
    link: "https://yamila-velay-landing.vercel.app/",
  },
  {
    id: 2,
    title: "Ocho&5",
    description:
      "Diseño minimalista combinado con una experiencia de usuario fluida para una empresa de marketing.",
    imageUrl: "/assets/telefono.png",
    link: "https://cinco-y-ocho.vercel.app/",
  },
  {
    id: 3,
    title: "Lead Magnet",
    description:
      "Proyecto con diseño simple fluido para empresa de IA & automation.",
    imageUrl: "/assets/telefono.png",
    link: "https://aiqwavelabscom.vercel.app/",
  },
];