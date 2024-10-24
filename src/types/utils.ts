export type ROUTE = {
    name: string
    to: string
}
interface MENU extends Array<ROUTE> { }
export const MENU: MENU = [
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
            { name: 'PHP', styles: 'border-[#777bb3] bg-[#777bb3] dark:bg-transparent dark:text-[#777bb3]' },
            { name: 'GIT', styles: 'border-[#ee513b] bg-[#ee513b] dark:bg-transparent dark:text-[#ee513b]' },
        ],
        time: 'Oct-2024 - present',
        image: '/test.jpg',
    },
]

type SiteLinks = {
    github: string;
    proyect_1_repo: string;
    linkedin: string;
    x: string;
    email: string;
  };

export const SOCIAL: SiteLinks = {
    github: 'https://github.com/jojosafk',
    proyect_1_repo: 'https://github.com/jojosafk/react-game-center',
    linkedin: 'https://www.linkedin.com/in/joellabrada/',
    x: 'https://x.com/jooeBoomer',
    email: 'https://x.com/jooeBoomer',
}
export const SITES = {
    portfolio: {
        github: 'https://github.com/jojosafk/portfolio',
        site: 'https://github.com/jojosafk/portfolio'
    },
    proyect_1: {
        github: 'https://github.com/jojosafk/react-game-center',
        site: 'https://github.com/jojosafk/react-game-center'
    },
}
