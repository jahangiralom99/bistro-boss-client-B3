import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSec = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

const useAxiosSecret = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSec.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptor 401 and 403 arr
  axiosSec.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );
  return axiosSec;
};

export default useAxiosSecret;
