/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2b4bee",
                        "background-light": "#f6f6f8",
                        "background-dark": "#0b0b0b",
                        "card-dark": "#151515",
                        "border-dark": "#222222",
                        "input-dark": "#1c1d27",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                },
            },
};
