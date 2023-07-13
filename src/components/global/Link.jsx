export default function Link(props) {
    const underlineHover =
        "absolute -bottom-0.5 w-0 h-[0.125rem] bg-purple-300 group-hover:w-1/2 transition-all ease-in-out duration-200";

    const textHover =
        "transition duration-200 ease-in-out group-hover:text-gray-200";

    return (
        <a class="group relative w-fit" href={props.url}>
            <span class={textHover}>{props.text}</span>
            <span class={underlineHover + " left-1/2"}></span>
            <span class={underlineHover + " right-1/2"}></span>
        </a>
    );
}
