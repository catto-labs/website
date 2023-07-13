import LogoHover from "./LogoHover.jsx";

export default function Header() {
    const underlineHover =
        "absolute -bottom-1 w-0 h-[0.125rem] bg-purple-300 group-hover:w-1/2 transition-all ease-in-out duration-200";

    const textHover =
        "transition duration-200 ease-in-out group-hover:text-gray-200";

    return (
        <header class="mx-32 my-16 flex flex-row justify-between">
            <a href="/">
                <LogoHover />
            </a>
            <div class="my-auto flex flex-row gap-x-8 uppercase tracking-tighter text-gray-400">
                <a class="group relative" href="/#what-we-do">
                    <span class={textHover}>What we do</span>
                    <span class={underlineHover + " left-1/2"}></span>
                    <span class={underlineHover + " right-1/2"}></span>
                </a>
                <a class="group relative" href="/#who-we-are">
                    <span class={textHover}>Who we are</span>
                    <span class={underlineHover + " left-1/2"}></span>
                    <span class={underlineHover + " right-1/2"}></span>
                </a>
                <a class="group relative" href="https://github.com/catto-labs/">
                    <span class={textHover}>Open-source</span>
                    <span class={underlineHover + " left-1/2"}></span>
                    <span class={underlineHover + " right-1/2"}></span>
                </a>
            </div>
        </header>
    );
}
