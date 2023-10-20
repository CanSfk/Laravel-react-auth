import Button from "@/Components/button";
import Input from "@/Components/input";
import InputError from "@/Components/inputError";
import InputLabel from "@/Components/inputLabel";

export default function EditProfile() {
    return (
        <div className="w-full bg-white rounded-md p-7 text-slate-700">
            <div className="w-1/2 flex flex-col gap-5">
                <div>
                    <h3 className="text-xl font-bold">Profile Information</h3>
                    <span className="text-sm">
                        Update your account's profile information and email
                        address.
                    </span>
                </div>
                <div className="grid gap-4 h-max">
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Name" htmlFor="name" />
                        <Input type="text" name="name" id="name" />
                        <InputError />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Email" htmlFor="email" />
                        <Input type="email" name="email" id="email" />
                        <InputError />
                    </div>
                    <Button title="Save" className="w-max" />
                </div>
            </div>
        </div>
    );
}
