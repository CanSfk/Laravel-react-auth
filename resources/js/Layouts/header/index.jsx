import CustomNavLink from "@/components/customNavLink";
import Button from "@/components/button";

export default function Header() {
    return (
        <div className="flex flex-col gap-1 px-1">
            <div className="flex items-center justify-between gap-2">
                <h1 className="text-4xl font-bold text-slate-800 flex-1">
                    Laravel and React
                </h1>
                <div className="flex gap-5 flex-[3] items-center justify-center">
                    <CustomNavLink title="Home" />
                    <CustomNavLink title="Profile" />
                </div>
                <div className="flex-1 flex items-end flex-col">
                    <div className="flex gap-2">
                        <CustomNavLink
                            as="button"
                            method="post"
                            title="Log out"
                            href={route("logout")}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-black rounded-full shadow-xl shadow-slate-800" />
        </div>
    );
}
