import LogoHover from "./LogoHover.jsx";
import Link from "./Link.jsx";

export default function Header() {
    return (
        <header class="flex flex-col items-center justify-between gap-y-6 md:flex-row md:items-start md:gap-y-0">
            <a href="/">
                <LogoHover />
            </a>
            <div class="my-auto flex w-full flex-row justify-between text-center font-light uppercase tracking-tight text-overlay1 sm:w-fit sm:justify-center sm:gap-x-8">
                <Link text="Projects" url="/#projects" />
                <Link text="The Team" url="/#team" />
                <Link text="Open-source" url="https://github.com/catto-labs/" />
            </div>
        </header>
    );
}
