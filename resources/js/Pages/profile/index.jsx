import Layouts from "@/Layouts";
import EditProfile from "./editProfile";
import UpdatePassword from "./updatePassword";
import DeleteProfile from "./deleteProfile";

export default function Profile({auth}) {
    return (
        <Layouts user={
            auth.user
        }>
            <div className="flex flex-col gap-10">
                <EditProfile user={
                    auth.user
                }/>
                <UpdatePassword/>
                <DeleteProfile/>
            </div>
        </Layouts>
    );
}
