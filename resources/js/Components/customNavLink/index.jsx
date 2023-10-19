import { Link } from "@inertiajs/react";

export default function CustomNavLink({ title, active = false, ...props }) {
    return (
        <Link
            {...props}
            className={`text-xl font-bold text-slate-900 transition duration-300 hover:text-shadow hover:text-cyan-500 ${
                active && "text-shadow !text-cyan-500"
            }`}
        >
            {title}
        </Link>
    );
}
