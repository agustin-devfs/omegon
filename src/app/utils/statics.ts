import { content } from "./content";

export const statics = {
  COMPANY: {
    NAME: "OMEGON",
    INDUSTRY: "Tech Industry",
    TITLE: "Diseñamos con propósito, desarrollamos con precisión.",
    TEXT: "En Omegon, combinamos diseño con propósito y desarrollo con precisión para crear aplicaciones y sitios web que marcan la diferencia. Desde la conceptualización hasta el lanzamiento, nos enfocamos en la calidad, la innovación y la excelencia técnica. Sumate a la evolución digital con soluciones a medida que potencian tu negocio.",
    ABOUTUS:"Omegon nació con la misión de crear soluciones digitales que combinan diseño, tecnología y estrategia. Somos un equipo comprometido con el desarrollo de aplicaciones y sitios web que no solo cumplen con altos estándares de calidad, sino que también responden a las necesidades reales de cada proyecto. ",
    BUTTON: { NAME: "¡Contactanos!", link: "#contact" },
  },

  HOME_TITLE: "OMegon",


  NAV_ITEMS: [
    {
      item: "Inicio",
      link: "/",
      iconSrc:"https://cdn.lordicon.com/jeuxydnh.json"
    },
    {
      item: "nuestros servicios",
      link: "#services",
    },

    {
      item: "sobre nosotros",
      link: "#about-us",
    },
    {
      item: "contactanos",
      link: "#contact",
    },
    {
      item: "instagram",
      link: "https://www.instagram.com/omegon.studio?igsh=MTY5ejQ1dDZwZnlzMg==",
    },
  ],

  //SECTIONS
  SECTIONS_TITLE: {
    HOME: "inicio",

    SERVICES: "Nuestros servicios",

    ABOUT_US: "¿Quienes somos?",

    CONTACT: "¿Querés saber más?¡Contactanos!",
  },

  // CONTACT
  CONTACT_FORM: {
    NAME: "Name",
    EMAIL: "Email",
    PHONE: "Phone",
    MESSAGE: "Message",
    SEND: "Send",
  },

  WHATSAPP: {
    CHAT_WITH_US: "Chat with us",
    SCHEDULE_MEETING: "Schedule a Meeting",
    TEXT_LINK: content.Whatsapp_Text_Link,
    link_whatsapp: `https://wa.me/+5491122548874?text=${content.Whatsapp_Text_Link}`,
  },

  //FOOTER
  FOOTER: {
    terms: "Terms",
    privacy: "Privacy",
    ALL_RIGHTS_RESERVED: "© 2025 Omegon. All Rights Reserved.",
    FOLLOW_US: "Follow Us",
  },
};
