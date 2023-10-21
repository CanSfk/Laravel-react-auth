import Button from "@/Components/button";
import Input from "@/Components/input";
import InputError from "@/Components/inputError";
import InputLabel from "@/Components/inputLabel";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function EditProfile({ user }) {
    const { data, setData, errors, patch, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

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
                <form onSubmit={submit} className="grid gap-4 h-max">
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Name" htmlFor="name" />
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel value="Email" htmlFor="email" />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="flex items-center gap-5">
                        <Button
                            title="Save"
                            disabled={processing}
                            className="w-max"
                        />

                        <Transition
                            show={recentlySuccessful}
                            enter="transition duration-300 ease-in-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition duration-500 ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm font-medium text-green-500">
                                Saved .
                            </p>
                        </Transition>
                    </div>
                </form>
            </div>
        </div>
    );
}
