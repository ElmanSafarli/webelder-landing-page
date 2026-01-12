import {
  misam_template,
  misam_main,
  misam_secondary,
  misam_forth,
  tmtech_template,
  tmtech_main,
  tmtech_first,
  buta_main,
  buta_template,
  buta_laptop,
  buta_phone,
} from "../../shared";

const portfolioData = [
  {
    id: "misam-pro",
    title: "Misam",
    subtitle: "Landing Page Development",
    images: {
      main: misam_main,
      secondary: misam_secondary,
      template: misam_template,
      forth: misam_forth,
    },
    gridSpan: 1,
    description: `
        ✨ We've taken the first step!
        We're pleased to present the first version of the MISAM website, which is now available online.
        The website showcases our communications solutions and services and explains our approach.`,
    skills: [
      "UI/UX",
      "Logo design",
      "Web design",
      "Web development",
      "SEO",
      "Google Analytics",
      "Deployment",
    ],
    links: [
      {
        name: "Website",
        link: "https://misam.pro",
      },
    ],
  },
  {
    id: "tmtech-pro",
    title: "Launching TMtech's New Website",
    subtitle: "Landing Page Development",
    images: {
      main: tmtech_main,
      template: tmtech_template,
      first: tmtech_first,
    },
    gridSpan: 1,
    description: `
        I'm excited to share the launch of TMtech's new website! 🎉
        
        I had the pleasure of developing this site, which features a modern design, seamless user experience, 
        and robust backend functionality. TMtech is a leader in cloud communication services, and their new online 
        presence now reflects their cutting-edge solutions and commitment to customer connection.`,
    skills: [
      "UI/UX",
      "Logo design",
      "Web design",
      "Web development",
      "SEO",
      "Google Analytics",
      "Deployment",
    ],
    links: [
      {
        name: "Website",
        link: "https://tmtech.pro",
      },
    ],
  },
  {
    id: "buta-dining",
    title: "Buta Dining - Restaurant website",
    subtitle: "Web App Development",
    images: {
      main: buta_main,
      template: buta_template,
      laptop: buta_laptop,
      phone: buta_phone,
    },
    gridSpan: 1,
    description: `
       Welcome to the restaurant website project page! This project was created to provide a convenient and fast way to 
       order food online with delivery of order notifications in Telegram. The site has a minimalistic design
      and an intuitive interface, which makes the ordering process easy and enjoyable for users.
    `,
    skills: [
      "UI/UX",
      "Logo design",
      "Web design",
      "Web development",
      "SEO",
      "Order Application",
      "Telegram Bot",
      "Google Analytics",
      "Deployment",
    ],
    links: [
      {
        name: "Website",
        link: "https://github.com/ElmanSafarli/Buta.git",
      },
    ],
  },
];

export default portfolioData;
