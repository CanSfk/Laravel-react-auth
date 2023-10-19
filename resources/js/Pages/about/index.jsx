import Layouts from "@/layouts";

export default function About() {
    document.title = "About";

    return (
        <Layouts>
            <div className="text-3xl font-bold grid place-items-center bg-slate-800 page-animate rounded-md">
                <h1>About</h1>
            </div>
        </Layouts>
    );
}
