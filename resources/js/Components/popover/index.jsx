import { createElement, useState } from "react";
import { createContext } from "react";
import PopoverButton from "./popoverButton";
import PopoverPanel from "./popoverPanel";
import PopoverLink from "./popoverLink";

export const PopoverContext = createContext();

export default function Popover({ as = "div", children, ...props }) {
    const [show, setShow] = useState(false);

    const button = children.find((c) => c.type == PopoverButton);
    const panel = children.find((c) => c.type == PopoverPanel);

    const close = () => setShow(false);

    const data = {
        show,
        open: () => setShow(true),
        close,
    };

    return createElement(
        as,
        { ...props },
        <PopoverContext.Provider value={data}>
            {button}
            {show && panel}
            {show && (
                <div
                    onClick={close}
                    className="fixed top-0 left-0 w-full h-full"
                />
            )}
        </PopoverContext.Provider>
    );
}

Popover.Button = PopoverButton;
Popover.Panel = PopoverPanel;
Popover.Link = PopoverLink;
