import Header from "./header";

export default function Layouts({ children, user }) {
    return (
        <section className="w-full min-h-screen bg-slate-200 flex">
            <div className="flex flex-col items-center flex-1">
                <Header user={user} />

                <main className="grid w-[1200px] mt-40 py-14 h-max">
                    {children}
                </main>
            </div>
        </section>
    );
}
