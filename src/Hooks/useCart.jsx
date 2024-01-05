import { useQuery } from "react-query";
import useAxiosSe from "./useAxiosSe";
import useAuth from "./useAuth";

const useCart = () => {
    const axios = useAxiosSe();
    const { user } = useAuth();
    // console.log(user?.email);
    
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    });

    return [cart, refetch];

};

export default useCart;