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
            colors: {
                brand: {
                    solidjs: "#8abfe6",
                    typescript: "#3279c6",
                    tailwindcss: "#49bef9",
                    vue: "#5ab884",
                    unocss: "#858585",
                    headlessui: "#6d81fa",
                    supabase: "#68d090",
                    rust: "#ed663d",
                    instagram: "#e5466c",
                    twitter: "#288cd9",
                    github: "#854390",
                    astro: "#f35233",
                    python: "#4786b8",
                    csharp: "#6d3a81",
                    java: "#e62000",
                    discord: "#5865F2",
                    react: "#3e9fca",
                    javascript: "#f0db4f",
                },
            },
        },
    },
    plugins: [],
};
