import { BsGoogle } from "react-icons/bs";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSe from "../../../Hooks/useAxiosSe";

const GoogleLogIn = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
    const navigate = useNavigate();
  const axios = useAxiosSe();

  const handleGoogleLogIn = () => {
    googleLogin()
        .then((result) => {
            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,  
        }
            axios.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    toast.success("google login successful");
                    navigate(location.state ? location.state : "/");
            })
    
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div onClick={handleGoogleLogIn} className="text-center">
      <button className="btn btn-outline btn-primary">
        <BsGoogle className="text-red-500" />
        Log in with
        <div>
          <span className="text-[#008744]">G</span>
          <span className="text-red-500">o</span>
          <span className="text-[#ffa700]">o</span>
          <span className="text-[#008744]">g</span>
          <span className="text-[#009955]">l</span>
          <span className="">e</span>
        </div>
      </button>
    </div>
  );
};

export default GoogleLogIn;
