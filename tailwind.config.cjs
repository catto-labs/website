const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Red Hat Text Variable", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            animation: {
                shine: "shine 0.6s ease-in-out",
            },
            keyframes: {
                shine: {
                    "100%": { left: "125%" },
                },
            },
        },
    },
    plugins: [require("@catppuccin/tailwindcss")],
};
