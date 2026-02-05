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
    description: `Freelance project developed for a real estate agent in the United States. Built with Astro and React for the frontend, and Strapi for the backend. Resend was used for email services, and the project was deployed using Vercel and Railway.`,
    time: "Dec/2024 - present",
    image: "/mbp.jpg",
    github: "https://github.com/jojoboomer/realtor-web",
    site: "/no-site",
  },
  {
    title: "Frontend Challenges Collection",
    description: `A curated collection of frontend solutions and challenges, showcasing skills across various technologies and frameworks. Continuously updated with new projects.`,
    time: "Jan/2025 - in progress",
    image: "/preview_fronted.png",
    github: "https://github.com/jojoboomer/frontend-projects",
    site: "https://frontend-projects-self.vercel.app",
  },
  {
    title: "Typing Speed Test",
    description: `A modern and responsive typing speed test application. Built with Vue 3, Pinia, Tailwind CSS, and TypeScript. This project is a solution to the Typing Speed Test Challenge by Frontend Mentor.`,
    time: "Dec/2025 - Jan/2026",
    image: "/preview_typing.png",
    github: "https://github.com/jojoboomer/typing-speed-test-vue",
    site: "https://quicktype-six.vercel.app/",
  },
  {
    title: "Challenge Demo - Jo's Restaurant",
    description: `A clean, responsive restaurant website I built for an iCodeThis pro challenge. Focused on visual appeal and user experience, featuring menu presentation, customer reviews, and essential info with a thoughtful layout and design.`,
    time: "Jun/2025",
    image: "/restaurant.webp",
    github: "https://github.com/jojoboomer/challenge-restaurant-website",
    site: "https://restaurant-demo-icodethis.netlify.app/",
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