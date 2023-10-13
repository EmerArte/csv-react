/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B5E2',
        secondary: '#1D252D',
        accent: '#5B93DB',
        card: '#F6F6F6',
        text: '#333F48',
        title: '#003C71',
        secondaryAccent: '#BBD2DF',
        background: '#FFFFFF',
        disabled: '#C1C6C8',
        backgroundDark: '#1D252D',
        options: '#DADFE2'
      },
    },
  },
  plugins: [],
});
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#00B5E2',
//         secondary: '#1D252D',
//         accent: '#5B93DB',
//         card: '#F6F6F6',
//         text: '#333F48',
//         title: '#003C71',
//         secondaryAccent: '#BBD2DF',
//         options: '#DADFE2'
//       },
//     },
//   },
//   plugins: [],
// }
