import Button from "@/Components/button";
import Input from "@/Components/input";
import InputError from "@/Components/inputError";
import InputLabel from "@/Components/inputLabel";
import { removeModal } from "@/Store/modal/actions";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function DeleteUser() {
    const refInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        errors,
        reset,
    } = useForm({
        current_password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            onSuccess: () => removeModal(),
            onError: () => refInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <div className="bg-white rounded-md p-7 text-slate-700 flex flex-col gap-5 w-[700px]">
            <div>
                <h3 className="text-xl font-bold">
                    Are you sure you want to delete your account?
                </h3>
                <span className="text-sm">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </span>
            </div>
            <form onSubmit={submit} className="grid gap-4 h-max">
                <div className="flex flex-col gap-1">
                    <InputLabel value="Password" htmlFor="current_password" />
                    <Input
                        ref={refInput}
                        type="password"
                        name="current_password"
                        id="current_password"
                        isFocused
                        value={data.current_password}
                        className="w-1/2"
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                    />
                    <InputError message={errors.current_password} />
                </div>

                <Button color="red">Delete Account</Button>
            </form>
        </div>
    );
}
