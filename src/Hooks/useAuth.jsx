import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const res = useContext(AuthContext)
    return res
};

export default useAuth;