import { createElement } from "react";
import { useContext } from "react";
import { PopoverContext } from "..";

export default function PopoverButton({ as = "button", children, ...props }) {
    const { open, show } = useContext(PopoverContext);

    return createElement(
        as,
        { ...props, onClick: open },
        (children =
            typeof children === "function" ? children({ show }) : children)
    );
}
