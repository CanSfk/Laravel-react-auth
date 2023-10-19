import Header from "./header";

export default function Layouts({ children }) {
    return (
        <div className="w-full min-h-screen flex flex-col gap-10 px-10 py-10">
            <Header />

            <main className="flex-1 h-full w-full grid">{children}</main>
        </div>
    );
}
