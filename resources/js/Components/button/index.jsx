import classNames from "classnames";
import propTypes from "prop-types";

export default function Button({
    title,
    className,
    disabled,
    color,
    width,
    ...props
}) {
    return (
        <button
            {...props}
            className={classNames(
                `px-4 py-2 text-[13px] uppercase font-semibold select-none rounded-md focus:ring-green-500 transition duration-200 tracking-widest focus:ring-2 ring-offset-2 focus:outline-none ${className}`,
                {
                    "bg-slate-900 text-slate-100 hover:bg-slate-700 focus:bg-slate-700":
                        color === "black",
                    "bg-red-600 text-red-100 hover:bg-red-700 focus:bg-red-700":
                        color === "red",
                    "w-full": width === "large",
                    "w-max": width === "small",
                    "pointer-events-none": disabled,
                }
            )}
        >
            {title}
        </button>
    );
}

Button.prototype = {
    width: propTypes.oneOf(["small", "large"]),
    color: propTypes.oneOf(["black", "red"]),
};

Button.defaultProps = {
    width: "small",
    color: "black",
};
