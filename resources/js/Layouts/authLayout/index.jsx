import ApplicationLogo from "@/components/applicationLogo";
import { Link } from "@inertiajs/react";

export default function AuthLayout({ children }) {
    return (
        <div className="w-full min-h-screen grid place-items-center bg-slate-200">
            <div className="h-max flex flex-col items-center gap-5">
                <Link className="focus:outline-none focus:ring-2 p-3 focus:ring-green-500 rounded-md group">
                    <ApplicationLogo
                        width={150}
                        className="hover:img-shadow-hover img-shadow transition duration-300 group-focus:img-shadow-hover"
                    />
                </Link>
                <div className="min-w-[450px] p-5 rounded-md bg-white shadow-xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
