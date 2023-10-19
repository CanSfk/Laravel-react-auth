export default function InputLabel({
    value,
    children,
    className = "",
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `text-sm font-medium select-none text-slate-700` + className
            }
        >
            {value ? value : children}
        </label>
    );
}
