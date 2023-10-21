import Layouts from "@/layouts";

export default function Home({ auth }) {
    return (
        <Layouts user={auth.user}>
            <div className="bg-white rounded-md p-6">
                <span>You're logged in !</span>
            </div>
        </Layouts>
    );
}
