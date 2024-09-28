/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      filter: {
        green:
          "invert(47%) sepia(63%) saturate(403%) hue-rotate(66deg) brightness(96%) contrast(92%)",
      },
    },
  },
  plugins: [],
};
