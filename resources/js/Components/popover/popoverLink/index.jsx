import { Link } from "@inertiajs/react";

export default function PopoverLink({ children, active = false, ...props }) {
    return (
        <Link
            {...props}
            className={`px-5 py-3 text-sm font-medium w-full flex text-slate-700 hover:bg-slate-200 transition duration-200 select-none ${
                active && "bg-slate-200"
            }`}
        >
            {children}
        </Link>
    );
}
