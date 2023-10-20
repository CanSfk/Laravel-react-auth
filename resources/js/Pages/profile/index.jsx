import Layouts from "@/Layouts";
import EditProfile from "./editProfile";
import UpdatePassword from "./updatePassword";
import DeleteProfile from "./deleteProfile";

export default function Profile() {
    return (
        <Layouts>
            <div className="flex flex-col gap-10">
                <EditProfile />
                <UpdatePassword />
                <DeleteProfile />
            </div>
        </Layouts>
    );
}
