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
    github: "https://github.com/jojoboomer/realtor-web",
    site: "",
  },
  {
    title: "FRONTED MENTOR CHALLANGES",
    description: `Collection of frontend solutions from the Frontend Mentor site. Developed using Astro + Panda CSS + React.`,
    time: "Jan-2025 -  in progress",
    image: "/preview_fronted.png",
    github: "https://github.com/jojoboomer/fronted-challanges",
    site: "https://frontedchallanges.netlify.app/",
  },
  {
    title: "API WORKOUT TRACKER",
    description: `This proyect was created to improve my backend knowledge and practice what I already know about ExpressJs. It is located on Roadmap.sh as a challenge to develop. I used ExpressJs and Typescript for the backend, Supabase for the database and authentication and Swagger for API documentation.`,
    time: "Jan-2025 - in progress",
    image: "/",
    github: "https://github.com/jojoboomer/api-workout-tracker",
    site: "",
  }
];

type SocialLinks = {
  github: string;
  linkedin: string;
  x: string;
  email: string;
};

export const SOCIAL: SocialLinks = {
  github: "https://github.com/jojoboomer",
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
    github: "https://github.com/jojoboomer/jojoboomer.github.io",
    site: "https://jojoboomer.github.io/",
  },
  proyect_1: {
    github: "https://github.com/jojosafk/react-game-center",
    site: "https://github.com/jojosafk/react-game-center",
  },
};
