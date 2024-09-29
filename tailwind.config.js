import forms from "@tailwindcss/forms";
import preline from "preline/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      filter: {
        green:
          "invert(47%) sepia(63%) saturate(403%) hue-rotate(66deg) brightness(96%) contrast(92%)",
      },
    },
  },
  plugins: [forms, preline],
};
