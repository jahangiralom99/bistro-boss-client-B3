import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {

    const { user } = useAuth();
    console.log(user);

    return (
        <div className="mt-7">
            <h1 className="text-3xl text-center">Hi, Welcome Back
                <span>{user?.displayName}</span>
            </h1>
        </div>
    );
};

export default UserHome;