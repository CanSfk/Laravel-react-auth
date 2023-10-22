import Button from "@/Components/button";
import Input from "@/Components/input";
import InputError from "@/Components/inputError";
import InputLabel from "@/Components/inputLabel";
import {Transition} from "@headlessui/react";
import {useForm} from "@inertiajs/react";

export default function UpdatePassword() {
    const {
        data,
        setData,
        put,
        reset,
        errors,
        recentlySuccessful

    } = useForm({current_password: '', password: '', password_confirmation: ''});

    const submit = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll:true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password_confirmation", "password");
                }
                if (errors.current_password) 
                    reset('current_password');
            }
        });
    }

    return (
        <div className="w-full bg-white rounded-md p-7 text-slate-700">
            <div className="w-1/2 flex flex-col gap-5">
                <div>
                    <h3 className="text-xl font-bold">Update Password</h3>
                    <span className="text-sm">
                        Ensure your account is using a long, random password to say secure.
                    </span>
                </div>
                <form onSubmit={submit}
                    className="grid gap-4 h-max">
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Current Password" htmlFor="currentPassword"/>
                        <Input value={
                                data.current_password
                            }
                            onChange={
                                (e) => setData('current_password', e.target.value)
                            }
                            type="password"
                            name="currentPassword"
                            id="currentPassword"/>
                        <InputError message={
                            errors.current_password
                        }/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel value="New Password" htmlFor="newPassword"/>
                        <Input value={
                                data.password
                            }
                            onChange={
                                (e) => setData('password', e.target.value)
                            }
                            type="password"
                            name="newPassword"
                            id="newPassword"/>
                        <InputError message={
                            errors.password
                        }/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Confirm Password" htmlFor="confirmPassword"/>
                        <Input value={
                                data.password_confirmation
                            }
                            onChange={
                                (e) => setData('password_confirmation', e.target.value)
                            }
                            type="password"
                            name="password_confirmation"
                            id="confirmPassword"/>
                        <InputError message={
                            errors.password_confirmation
                        }/>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button title="Save" className="w-max"/>

                        <Transition show={recentlySuccessful}
                            enter="transition ease-in-out duration-300"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out duration-300"
                            leaveTo="opacity-0">
                            <p className="text-sm text-green-600 font-medium">Saved.</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </div>
    );
}
