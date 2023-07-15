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
                <Link
                    text="Branding"
                    url="https://github.com/catto-labs/brand"
                />
                <Link text="Open-source Licenses" url="/licenses" />
            </div>
            <div class="z-10 flex flex-col gap-y-4">
                <p class="text-sm font-light uppercase tracking-tight text-overlay0">
                    Shoutouts
                </p>
                <div class="flex flex-col gap-y-4">
                    <div>
                        Built using{" "}
                        <a
                            href="https://astro.build/"
                            class="group relative inline-flex w-fit"
                        >
                            <div>
                                <img
                                    class="mr-[0.0625rem] inline-flex h-4"
                                    src={IconAstro}
                                ></img>
                                stro
                            </div>
                            <span class={underlineHover + " left-1/2"}></span>
                            <span class={underlineHover + " right-1/2"}></span>
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.solidjs.com/"
                            class="group relative inline-flex w-fit"
                        >
                            <div>
                                <img
                                    class="mb-1 mr-1 inline-flex h-4"
                                    src={IconSolid}
                                ></img>
                                SolidJS
                            </div>
                            <span class={underlineHover + " left-1/2"}></span>
                            <span class={underlineHover + " right-1/2"}></span>
                        </a>
                    </div>
                    <div>
                        Styled with{" "}
                        <a
                            href="https://tailwindcss.com"
                            class="group relative ml-[0.125rem] inline-flex w-fit"
                        >
                            <div>
                                <img
                                    class="mb-1 mr-1 inline-flex w-5"
                                    src={IconTailwindCss}
                                ></img>
                                Tailwind CSS
                            </div>
                            <span class={underlineHover + " left-1/2"}></span>
                            <span class={underlineHover + " right-1/2"}></span>
                        </a>
                    </div>
                    <div>
                        Hosted by{" "}
                        <a
                            href="https://www.netlify.com"
                            class="group relative ml-1 inline-flex w-fit"
                        >
                            <div>
                                <img
                                    class="mb-1 mr-1 inline-flex w-5"
                                    src={IconNetlify}
                                ></img>
                                Netlify
                            </div>
                            <span class={underlineHover + " left-1/2"}></span>
                            <span class={underlineHover + " right-1/2"}></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
