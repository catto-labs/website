import Link from "./Link.jsx";
import IconAstro from "../../assets/technologies/astro.svg";
import IconSolid from "../../assets/technologies/solid.svg";
import IconTailwindCss from "../../assets/technologies/tailwindcss.svg";
import IconNetlify from "../../assets/technologies/netlify.svg";
import Logo from "../../assets/logo_white.svg";

export default function Header() {
    const underlineHover =
        "absolute -bottom-1 w-0 h-[0.125rem] bg-mauve group-hover:w-1/2 transition-all ease-in-out duration-200";

    return (
        <footer class="relative flex flex-col justify-between gap-x-8 gap-y-16 overflow-hidden bg-crust px-4 py-8 shadow-inner sm:px-8 md:flex-row md:gap-y-0 md:px-16 md:py-12 lg:px-32 lg:py-16 xl:justify-start xl:gap-x-28 2xl:gap-x-32">
            <img
                src={Logo}
                class="absolute -bottom-16 -right-16 h-[32rem] rotate-[-12deg] opacity-90 mix-blend-overlay md:-bottom-11 md:-right-11 md:h-96"
            />
            <div class="z-10 flex flex-col gap-y-2">
                <p>catto labs — Made with love, worldwide.</p>
                <p class="text-sm font-light text-overlay0">
                    Copyright © 2023 catto labs
                </p>
            </div>
            <div class="z-10 flex flex-col gap-y-4">
                <p class="text-sm font-light uppercase tracking-tight text-overlay0">
                    What we do
                </p>
                <Link text="Pokaimon" url="https://pokaimon.moe" />
                <Link text="Pawnote" url="https://pawnote.vercel.app" />
            </div>
            <div class="z-10 flex flex-col gap-y-4">
                <p class="text-sm font-light uppercase tracking-tight text-overlay0">
                    Our Members
                </p>
                <Link text="Jason (@pnxl)" url="https://github.com/pnxl" />
                <Link
                    text="Vexcited (@vexcited)"
                    url="https://github.com/vexcited"
                />
                <Link
                    text="Trobo (@trobonox)"
                    url="https://github.com/trobonox"
                />
            </div>
            <div class="z-10 flex flex-col gap-y-4">
                <p class="text-sm font-light uppercase tracking-tight text-overlay0">
                    Links
                </p>
                <Link text="Branding" url="/branding" />
                <Link text="Open-source Licenses" url="/licenses" />
            </div>
        </footer>
    );
}
