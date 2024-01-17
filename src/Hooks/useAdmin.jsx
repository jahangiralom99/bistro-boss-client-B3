import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecret from "./useAxiosSecret";

const useAdmin = () => {
    const { user ,loader} = useAuth();
    const axios = useAxiosSecret();

    // console.log(user.email);

    const {data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['admin', user],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(`users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;