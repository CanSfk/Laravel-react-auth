import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function Input(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const refInput = ref ? ref : useRef();

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
});
