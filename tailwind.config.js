/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    extend: {},
    fontFamily:{
      body: ['Josefin Sans'],
      special: ['Roboto'],
    }
  },
  plugins: [],
}

