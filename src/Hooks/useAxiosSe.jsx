import axios from "axios";

const axiosS = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    // withCredentials: true,
});
const useAxiosSe = () => {
    return axiosS;
};

export default useAxiosSe;