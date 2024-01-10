import axios from "axios";

const axiosS = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});
const useAxiosSe = () => {
    return axiosS;
};

export default useAxiosSe;