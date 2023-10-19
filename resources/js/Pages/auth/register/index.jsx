import Button from "@/components/button";
import Input from "@/components/input";
import InputError from "@/components/inputError";
import InputLabel from "@/components/inputLabel";
import AuthLayout from "@/layouts/authLayout";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <AuthLayout>
            <form className="flex flex-col gap-4" onSubmit={submit}>
                <div className="flex flex-col gap-1">
                    <InputLabel value="Name" htmlFor="name" />
                    <Input
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                        type="text"
                        name="name"
                        id="name"
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="flex flex-col gap-1">
                    <InputLabel value="Email" htmlFor="email" />
                    <Input
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <InputError message={errors.email} />
                </div>

                <div className="flex flex-col gap-1">
                    <InputLabel value="Password" htmlFor="password" />
                    <Input
                        onChange={(e) => setData("password", e.target.value)}
                        value={data.password}
                        type="password"
                        name="password"
                        id="password"
                    />
                    <InputError message={errors.password} />
                </div>

                <div className="flex flex-col gap-1">
                    <InputLabel
                        value="Confirm Password"
                        htmlFor="confirmPassword"
                    />
                    <Input
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        value={data.password_confirmation}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                    <InputError message={errors.password_confirmation} />
                </div>

                <div className="mt-2 w-full flex items-center gap-4">
                    <Button type="submit" title="Register" className="w-max" />
                    <Link
                        href={route("login")}
                        className="text-sm font-semibold text-slate-600 underline hover:text-slate-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none rounded-md px-1 py-1 focus:text-slate-800"
                    >
                        Already register ?
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
