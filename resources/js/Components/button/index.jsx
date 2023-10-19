import classNames from "classnames";

export default function Button({ title, className, disabled, ...props }) {
    return (
        <button
            {...props}
            className={classNames(
                `px-4 py-2 text-sm uppercase font-semibold select-none rounded-md bg-slate-900 text-slate-100 tracking-widest focus:ring-2 ring-offset-2 focus:outline-none ${className}`,
                {
                    "hover:bg-none focus:bg-none": disabled,
                    " focus:ring-green-500 focus:bg-slate-700 transition ease-in-out duration-200 hover:bg-slate-700":
                        !disabled,
                }
            )}
        >
            {title}
        </button>
    );
}
