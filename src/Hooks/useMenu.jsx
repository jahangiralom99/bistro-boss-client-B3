import { useQuery } from "react-query";
import useAxiosSe from "./useAxiosSe";

const useMenu = () => {
  const axios = useAxiosSe();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/menu")
  //     .then((res) => res.json())
  //       .then((data) => { 
  //           setMenu(data);
  //           setLoading(false);
  //     });
  // }, []);
  
  const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'], 
    queryFn: async() =>{
        const res = await axios.get('/menu');
        return res.data;
    }
})
  
  return [menu, loading, refetch];
};

export default useMenu;
