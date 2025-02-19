import {content} from "./content"

export const statics = {
  COMPANY: {
    NAME: "Omegon",
    INDUSTRY: "Tech Industry",
    TEXT: "Desarrollamos soluciones tecnológicas a medida y te acompañamos en cada etapa de tu proyecto",
    BUTTON: { NAME: "Contact Us", link: "/contact" },
  },

  HOME_TITLE: "Omegon",

  NAV_ITEMS: [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "Services",
      link: "#services",
    },
    {
      item: "Success Cases",
      link: "#success-cases",
    },
    {
      item: "About Us",
      link: "#about-us",
    },
    {
      item: "Testimonials",
      link: "#testimonials",
    },
    {
      item: "Contact",
      link: "#contact",
    },
  ],

//SECTIONS
  SECTIONS_TITLE: {
    SERVICES: "Services",
    SUCCESS_CASES: "Success Cases",
    ABOUT_US: "About Us",
    TESTIMONIALS: "Testimonials",
    CONTACT: "Contact",
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
    link_whatsapp : `https://wa.me/+5491157617111?text=${content.Whatsapp_Text_Link}`,
  },

   //FOOTER
   FOOTER : {
    terms: "Terms",
    privacy:"Privacy",
    ALL_RIGHTS_RESERVED: "© 2025 Omegon. All Rights Reserved.",
    FOLLOW_US: "Follow Us",
  }
};
