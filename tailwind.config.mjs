/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Custom font family
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#247CFF",
      },
    },
  },
  plugins: [],
};
