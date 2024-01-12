import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecret from "./useAxiosSecret";

const useAdmin = () => {
    const { user } = useAuth();
    const axios = useAxiosSecret();

    const {data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['admin', user.email],
        queryFn: async () => {
            const res = await axios.get(`users/admin/${user.email}`);
            return res.data;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;