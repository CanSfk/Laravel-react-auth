import Button from "@/Components/button";
import Input from "@/Components/input";
import InputError from "@/Components/inputError";
import InputLabel from "@/Components/inputLabel";

export default function UpdatePassword() {
    return (
        <div className="w-full bg-white rounded-md p-7 text-slate-700">
            <div className="w-1/2 flex flex-col gap-5">
                <div>
                    <h3 className="text-xl font-bold">Update Password</h3>
                    <span className="text-sm">
                        Ensure your account is using a long, random password to
                        say secure.
                    </span>
                </div>
                <div className="grid gap-4 h-max">
                    <div className="flex flex-col gap-1">
                        <InputLabel
                            value="Current Password"
                            htmlFor="currentPassword"
                        />
                        <Input
                            type="password"
                            name="currentPassword"
                            id="currentPassword"
                        />
                        <InputError />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel
                            value="New Password"
                            htmlFor="newPassword"
                        />
                        <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                        />
                        <InputError />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel
                            value="Confirm Password"
                            htmlFor="confirmPassword"
                        />
                        <Input
                            type="password"
                            name="password_confirmation"
                            id="confirmPassword"
                        />
                        <InputError />
                    </div>
                    <Button title="Save" className="w-max" />
                </div>
            </div>
        </div>
    );
}
