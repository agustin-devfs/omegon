import emailjs from '@emailjs/browser';

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

emailjs.init(publicKey);

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID

const sendEmail = (form) => {
    return emailjs.sendForm(serviceID, templateID, form)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          return true; 
      })
      .catch((error) => {
          console.log('Email send failed:', error.text);
          return false; 
      });
  }

export default sendEmail;