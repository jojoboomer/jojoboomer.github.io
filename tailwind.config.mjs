/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "l-from": "#abecd6",
        "l-to": "#fbed96",
        black: "#000000",
        gray: "#434343",
        //Theme
        primary: "#CC5725",
        glass:"rgba(255, 255, 255, 0.15)",
        //Others
        linkedin: "#0073b2",
      },
      fontSize: {
        52: "52px",
        24: "24px",
      },
      transitionProperty: {
        translate: "translate",
      },
      backgroundImage: {
        noise: "url('/img/hero-pattern.svg')",
      },
      gridTemplateRows:{
        card:'repeat(4, auto)'
      },
      gridTemplateCol:{
        card:'60% 40%'
      },
      lineHeight: {
        subhead: '1.1',
        head: '1.3',
        text: '1.5',
      },
      letterSpacing: {
        head: '-0.03em',
        text: '0.03em',
      },
      boxShadow: {
        'top': '0px -10px 15px -3px  rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
};
