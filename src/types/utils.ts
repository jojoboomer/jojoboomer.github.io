export type ROUTE = {
    name: string
    to: string
}
export const MENU: ROUTE[] = [
    { name: 'home', to: '' },
    { name: 'About', to: 'about' },
    // { name: 'Services', href: '#services' },
    { name: 'Work', to: 'work' },
    { name: 'Proyects', to: 'proyects' },
    { name: 'Contact', to: 'contact' },
]

interface TECH {
    name: string
    styles: string
}
interface PROYECT {
    title: string
    description: string
    tecs: TECH[]
    time: string
    image: string
}

export const PROYECTS: PROYECT[] = [
    {
        title: 'REACT GAME CENTER',
        description: `A site to host games mades with react. You can play now: Memory game and Hangman Game`,
        tecs: [
            { name: 'HTML', styles: 'border-[#e44d26] bg-[#e44d26] dark:bg-transparent dark:text-[#e44d26]' },
            { name: 'CSS', styles: 'border-[#1172b8] bg-[#1172b8] dark:bg-transparent dark:text-[#1172b8]' },
            { name: 'JS', styles: 'border-[#f5de19] bg-[#f5de19] dark:bg-transparent dark:text-[#f5de19]' },
            { name: 'TS', styles: 'border-[#007acc] bg-[#007acc] dark:bg-transparent dark:text-[#007acc]' },
            { name: 'REACT', styles: 'border-[#ee513b] bg-[#ee513b] dark:bg-transparent dark:text-[#ee513b]' },
            // { name: 'TAILWIND', styles: 'border-[#44a8b3] bg-[#44a8b3] dark:bg-transparent dark:text-[#44a8b3]' },
            // { name: 'ASTRO', styles: 'border-[#ff5d01] bg-[#ff5d01] dark:bg-transparent dark:text-[#ff5d01]' },
        ],
        time: 'Oct-2024 - present',
        image: '',
    },
]

type SocialLinks = {
    github: string;
    linkedin: string;
    x: string;
    email: string;
};

export const SOCIAL: SocialLinks = {
    github: 'https://github.com/jojosafk',
    linkedin: 'https://www.linkedin.com/in/joellabrada/',
    x: 'https://x.com/jooeBoomer',
    email: 'mailto:jjlabranate@gmail.com',
}

export interface SITE {
    github: string,
    site: string
}

interface SITES {
    portfolio : SITE
    proyect_1 : SITE
}

export const SITES: SITES = {
    portfolio: {
        github: 'https://github.com/jojosafk/portfolio',
        site: 'https://github.com/jojosafk/jojosafk.github.io'
    },
    proyect_1: {
        github: 'https://github.com/jojosafk/react-game-center',
        site: 'https://github.com/jojosafk/react-game-center'
    },
}
