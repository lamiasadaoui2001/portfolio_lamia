/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors:{
      nuit: "#010326",
      bleuProfond: "#0E1122",
      framboise: "#C71B52",
      blanc: "#FFFFFF",
      violetSombre: "#3c2d57",
      mauveGris: "#5b4e6a",
      lilasPâle: "#896f8f",
      noir: "#000000",
    },
    extend: {
      boxShadow: {
      framboiseShadow: "0px 0px 20px 0px rgba(199, 27, 82, 0.5)",
      },
    },
    fontFamily:{
      body: ['Josefin Sans'],
      special: ['Roboto'],
      logo : ['Delius'],
    }
  },
  plugins: [],
}

