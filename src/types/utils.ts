export type ROUTE = {
  name: string;
  to: string;
};
export const MENU: ROUTE[] = [
  { name: "home", to: "" },
  { name: "About", to: "about" },
  { name: "Work", to: "work" },
  { name: "Proyects", to: "proyects" },
  { name: "Contact", to: "contact" },
];


interface PROYECT {
  title: string;
  description: string;
  time: string;
  image: string;
  github: string;
  site: string;
}

export const PROYECTS: PROYECT[] = [
  {
    title: "REAL STATE MBP",
    description: `This project was developed as freelancer for a Real State agent in the United States. The site was created with Astro and React and the backend is developed in Strapi. Resend is used for the mail service. For deployment I use Vercel and Railways`,
    time: "Dec-2024 - present",
    image: "/mbp.jpg",
    github: "",
    site: "",
  },
  {
    title: "REACT GAME CENTER",
    description: `This is a personal proyect to improve my skills in react and programming logic. 
    My goal is to create games while learning new technologies. At this moment the project
    has 3 games developed with react and three.js.`,
    time: "Oct-2024 - present",
    image: "/game.webp",
    github: "https://github.com/jojosafk/react-game-center",
    site: "",
  },
];

type SocialLinks = {
  github: string;
  linkedin: string;
  x: string;
  email: string;
};

export const SOCIAL: SocialLinks = {
  github: "https://github.com/jojosafk",
  linkedin: "https://www.linkedin.com/in/joellabrada",
  x: "https://x.com/jooeBoomer",
  email: "mailto:jjlabranate@gmail.com",
};

export interface SITE {
  github: string;
  site: string;
}

interface SITES {
  portfolio: SITE;
  proyect_1: SITE;
}

export const SITES: SITES = {
  portfolio: {
    github: "https://github.com/jojosafk/portfolio",
    site: "https://github.com/jojosafk/jojosafk.github.io",
  },
  proyect_1: {
    github: "https://github.com/jojosafk/react-game-center",
    site: "https://github.com/jojosafk/react-game-center",
  },
};
