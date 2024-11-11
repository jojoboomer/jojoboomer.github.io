/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //Aux
        black: "#000000",
        gray: "#434343",
        gray: "#494D58",
        //social colors
        linkedin: "#0073B2",
        github: "#000000",
        email: "#D75448",
        x: "#000000",
        //Background
        darkmode: "#0D1717",
        lightmode: "#F0F0F0",
        glass: "rgba(255, 255, 255, 0.15)",
        //Brands
        primary: "#E7473C",
        "primary-100": "#FF938B",
        "primary-300": "#FC6D63",
        "primary-500": "#E7473C",
        "primary-700": "#BB251A",
        "primary-900": "#890F06",
        "azul-oxford": "hsla(221, 51%, 16%, 1)",
        // azul oscuro clásico (#0A1828), turquesa (#178582), dorado (#BFA181)
        //humo blanco (#F0F0F0), rojo brillante (#E7473C)
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
        gradient: "radial",
      },
      gridTemplateRows: {
        card: "repeat(4, auto)",
      },
      gridTemplateCol: {
        card: "60% 40%",
      },
      lineHeight: {
        subhead: "1.1",
        head: "1.3",
        text: "1.5",
      },
      letterSpacing: {
        head: "-0.03em",
        text: "0.03em",
      },
      boxShadow: {
        top: "0px -10px 15px -3px  rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
