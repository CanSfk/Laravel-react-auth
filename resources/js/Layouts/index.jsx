import { useEffect, useState } from "react";
import Header from "./header";

export default function Layouts({ children }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasScrollBar =
            document.documentElement.scrollHeight > window.innerHeight;
        if (hasScrollBar) setShow(false);
        else setShow(true);
    });

    return (
        <section className="w-full min-h-screen bg-slate-200 flex">
            <div className="flex flex-col items-center flex-1">
                <Header show={show} />

                <main className="grid w-[1200px] mt-40 py-14 h-max">
                    {children}
                </main>
            </div>
            {show && <div className="min-h-screen w-[15px]" />}
        </section>
    );
}
