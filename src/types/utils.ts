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
    title: "FREELANCE - REAL STATE MBP",
    description: `This project was developed as freelancer for a Real State agent in the United States. The site was created with Astro and React and the backend is developed in Strapi. Resend is used for the mail service. For deployment I use Vercel and Railways`,
    time: "Dec-2024 - present",
    image: "/mbp.jpg",
    github: "https://github.com/jojoboomer/realtor-web",
    site: "/no-site",
  },
  {
    title: "CHALLANGE DEMO - FRONTED MENTOR CHALLANGES",
    description: `Collection of frontend solutions from the Frontend Mentor site. Developed using Astro + Panda CSS + React.`,
    time: "Jan-2025 -  in progress",
    image: "/preview_fronted.webp",
    github: "https://github.com/jojoboomer/fronted-challanges",
    site: "https://frontedchallanges.netlify.app/",
  },
  {
    title: "TECHNICAL TEST - TASK LIST",
    description: `This project is the response to a technical test. The challenge was to develop a basic task list. The tech stack was React + SHADCN UI + SUPABASE. For this demo I used local storage instead of Supabase. `,
    time: "2025",
    image: "/tasklist.webp",
    github: "https://task-list-ce.netlify.app/",
    site: "https://tasklist-tech.netlify.app/",
  },
  {
    title: "TECHNICAL TEST - BASIC ECOMMERCE",
    description: `This project is the response to a technical test. The challenge was to develop a basic e-commerce platform in a short amount of time using React.`,
    time: "2025",
    image: "/ecommerce.png",
    github: "https://github.com/jojoboomer/tt-ecommerce",
    site: "https://tt-ecommerce.netlify.app",
  },
  {
    title: "TECHNICAL TEST - GAMER SITE",
    description: `This project is the response to a technical test. Creation of the website for the game streaming platform "Gamor." It was required not to use any component libraries or frameworks. The site includes features such as authentication, theme switching, searches, and more.`,
    time: "2025",
    image: "/gamor.webp",
    github: "/no-site",
    site: "https://gamor-streaming.vercel.app/",
  },
  {
    title: "CHALLANGE DEMO - JO´S RESTAURANT",
    description: `Site description: The restaurant landing page project will require you to develop a website that showcases the restaurant's menu, reviews, and other essential information. You will need to pay attention to details such as layout, color scheme, typography, and responsiveness to create an aesthetically pleasing and user-friendly website. Show more on https://icodethis.com/pro-challenges/jos-restaurant-website`,
    time: "2025",
    image: "/gamor.webp",
    github: "https://github.com/jojoboomer/challenge-restaurant-website",
    site: "https://icodethis.com/pro-challenges/jos-restaurant-website/341638",
  },
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

export const MASTERING: string = "React Native";