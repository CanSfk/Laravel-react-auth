import Button from "@/Components/button";
import { setModal } from "@/Store/modal/actions";

export default function DeleteProfile() {
    return (
        <div className="w-full bg-white rounded-md p-7 text-slate-700">
            <div className="w-1/2 flex flex-col gap-5">
                <div className="leading-5">
                    <h3 className="text-xl font-bold">Delete Profile</h3>
                    <span className="text-sm">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </span>
                </div>
                <Button
                    onClick={() => setModal("deleteUser")}
                    title="Delete Account"
                    color="red"
                >
                    Delete Account
                </Button>
            </div>
        </div>
    );
}
