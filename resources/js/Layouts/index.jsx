import { useModal } from "@/Store/modal/hooks";
import Header from "./header";
import { modals } from "@/Modals";
import { removeModal } from "@/Store/modal/actions";
import { Transition } from "@headlessui/react";

export default function Layouts({ children, user }) {
    const { name } = useModal();
    const currentModal = modals.find((m) => m.name === name);

    return (
        <section className="w-full min-h-screen bg-slate-200 flex">
            {currentModal && (
                <>
                    <div
                        onClick={removeModal}
                        className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] z-10"
                    />

                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <currentModal.element />
                    </div>
                </>
            )}

            <div className="flex flex-col items-center flex-1">
                <Header user={user} />

                <main className="grid w-[1200px] mt-40 py-14 h-max">
                    {children}{" "}
                </main>
            </div>
        </section>
    );
}
