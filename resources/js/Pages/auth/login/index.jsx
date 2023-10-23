import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import InputLabel from "@/components/inputLabel";
import { Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/layouts/authLayout";
import InputError from "@/components/inputError";
import { useEffect } from "react";

export default function Login() {
    const { post, data, setData, errors, processings } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <AuthLayout>
            <form onSubmit={submit} className="flex flex-col gap-4">
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

                <div>
                    <label className="select-none flex items-center gap-2">
                        <Checkbox />
                        <span className="text-sm font-medium text-slate-700">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex gap-5 items-center mt-2">
                    <Button
                        className="w-max"
                        disabled={processings}
                    >Log in</Button>
                    <div className="flex items-center gap-2">
                        <Link className="text-sm font-semibold text-slate-600 underline hover:text-slate-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none rounded-md px-1 py-1 focus:text-slate-800">
                            Forgot your password ?
                        </Link>
                        <Link
                            href={route("register")}
                            className="text-sm font-semibold text-slate-600 underline hover:text-slate-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none rounded-md px-1 py-1 focus:text-slate-800"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}
