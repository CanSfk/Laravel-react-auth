import { Link } from "@inertiajs/react";

export default function CustomNavLink({ title, active = false, ...props }) {
    return (
        <Link
            {...props}
            className={`font-medium text-sm border-b-[2px] border-transparent text-slate-700 px-1 py-6 block ${
                active && "!border-green-500"
            }`}
        >
            {title}
        </Link>
    );
}
