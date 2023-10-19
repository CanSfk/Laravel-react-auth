export default function Input({ type, className, ...props }) {
    return (
        <input
            {...props}
            type={type}
            className={`rounded-md border-slate-400 border` + className}
        />
    );
}
