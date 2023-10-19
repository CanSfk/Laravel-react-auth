export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                `text-sm text-green-500 rounded-sm focus:ring-offset-2 focus:outline-none focus:ring-green-500` +
                className
            }
        />
    );
}
