import { useEffect, useRef } from "react";

export default function Input({
    type,
    className = "",
    isFocused = false,
    ...props
}) {
    const refInput = useRef();

    useEffect(() => {
        isFocused && refInput.current.focus();
    }, []);

    return (
        <input
            ref={refInput}
            {...props}
            type={type}
            className={`rounded-md border-slate-400 border ${className}`}
        />
    );
}
