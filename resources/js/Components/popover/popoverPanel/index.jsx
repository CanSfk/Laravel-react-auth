import { createElement } from "react";

export default function PopoverPanel({ as = "div", children, ...props }) {
    return createElement(as, { ...props }, children);
}
