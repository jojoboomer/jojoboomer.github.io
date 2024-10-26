/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gray: "#434343",
        // 'darkmode': "#1b1818",
        // 'primary-900': "#601d00",
        // 'primary-700': "#af4011",
        // 'primary': "#CC5725",
        // 'primary-300': "#e57443",
        // 'primary-100': "#ff986c",
        'darkmode': "#1A191D",
        'lightmode': "#fff",
        'primary-900': "#001B87",
        'primary-700': "#1431A9",
        'primary': "#2341B8",
        'primary-300': "#3958D6",
        'primary-100': "#5A7BFF",

        glass:"rgba(255, 255, 255, 0.15)",
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
