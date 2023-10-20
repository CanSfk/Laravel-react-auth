import CustomNavLink from "@/components/customNavLink";
import ApplicationLogo from "@/Components/applicationLogo";
import { Link } from "@inertiajs/react";
import Popover from "@/Components/popover";

export default function Header({ show }) {
    return (
        <div
            className={`bg-white w-full absolute top-0 left-0 ${
                show ? "pr-[15px]" : ""
            }`}
        >
            <div className="border-b border-slate-200 w-full flex items-center justify-center">
                <div className="w-[1200px] flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Link href="/">
                            <ApplicationLogo width="40" />
                        </Link>
                        <div>
                            <CustomNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                title="Dashboard"
                            />
                        </div>
                    </div>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-2 text-sm text-slate-700">
                            {({ show }) => (
                                <>
                                    <span>Can SAFAK</span>
                                    <div
                                        className={`${
                                            show && "-rotate-180 text-green-600"
                                        } transition duration-300`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            height={15}
                                        >
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </>
                            )}
                        </Popover.Button>
                        <Popover.Panel className="absolute top-[180%] right-0 bg-slate-100 shadow-lg rounded-md w-[200px] overflow-hidden z-50">
                            <Popover.Link
                                active={route().current("profile")}
                                href={route("profile")}
                            >
                                Profile
                            </Popover.Link>
                            <Popover.Link href={route("logout")} method="post">
                                Log Out
                            </Popover.Link>
                        </Popover.Panel>
                    </Popover>
                </div>
            </div>
            <div className="flex items-center justify-center shadow-sm">
                <div className="w-[1200px] py-6">
                    <h1 className="text-xl font-bold text-slate-700">
                        Dashboard
                    </h1>
                </div>
            </div>
        </div>
    );
}
