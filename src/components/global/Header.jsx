import LogoHover from "./LogoHover.jsx";
import Link from "./Link.jsx";

export default function Header() {
    const underlineHover =
        "absolute -bottom-1 w-0 h-[0.125rem] bg-purple-300 group-hover:w-1/2 transition-all ease-in-out duration-200";

    const textHover =
        "transition duration-200 ease-in-out group-hover:text-gray-200";

    return (
        <header class="flex flex-col items-center justify-between gap-y-6 md:flex-row md:items-start md:gap-y-0">
            <a href="/">
                <LogoHover />
            </a>
            <div class="my-auto flex w-full flex-row justify-between text-center font-light uppercase tracking-tight text-gray-400 sm:w-fit sm:justify-center sm:gap-x-8">
                <Link text="What we do" url="/#what-we-do" />
                <Link text="Who we are" url="/#who-we-are" />
                <Link text="Open-source" url="https://github.com/catto-labs/" />
            </div>
        </header>
    );
}
