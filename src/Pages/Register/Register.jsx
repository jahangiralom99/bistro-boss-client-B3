import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sideImg from "../../assets/login/authentication2 1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosSe from "../../Hooks/useAxiosSe";
import GoogleLogIn from "../Shared/GoogleLogIn/GoogleLogIn";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosSe();

  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Please Wait ..........");
    try {
      const res = await createUser(data.email, data.password);
      const userInfo = {
        name: data.name,
        email: data.email,
      }
     await axios.post('/users', userInfo)
        .then(res => {
          if (res.data.insertedId) {
            console.log(res);
            toast.success("User created successfully", { id: toastId });
            navigate(location.state ? location.state : "/");
          }
      })
      
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register </title>
      </Helmet>
      <div className="bg-[url('https://i.postimg.cc/Yqcq6KX6/Rectangle-77.png')] shadow-2xl">
        <div className="px-6">
          <div className="flex min-h-full items-center flex-1 flex-col md:flex-row-reverse justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <img
                className="mx-auto h- w-auto border"
                src={sideImg}
                alt="Your Company"
              />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-6 text-center text-4xl font-bold leading-9 tracking-tight ">
                Register
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 mt-12"
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Your Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="name"
                      type="text"
                      autoComplete="text"
                      // required
                      {...register("name", { required: true })}
                      placeholder="your name"
                      className="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name && (
                      <p className="text-red-600">Name is Required</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  "
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      // required
                      {...register("email", { required: true })}
                      placeholder="your Email"
                      className="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <p className="text-red-600">email is Required</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      id="password"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])/,
                      })}
                      type={isShow ? "text" : "password"}
                      autoComplete="current-password"
                      // required
                      placeholder="Your Password"
                      className="block w-full rounded-md border-0 py-3 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div onClick={() => setIsShow(!isShow)} className="-ml-8">
                      {isShow ? (
                        <BsEyeFill className="text-xl" />
                      ) : (
                        <BsEyeSlashFill className="text-xl" />
                      )}
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      password must less then 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      password must be 1 uppercase 1 special characters & 1
                      lowercase
                    </p>
                  )}

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-10 text-center text-sm text-gray-500">
                All ready have an account ? Please
                <button className="btn btn-link">
                  <Link to="/login">Login</Link>
                </button>
                {error && (
                  <p className="text-bold text-red-500 mb-8 px-4">{error}</p>
                )}
              </div>
              <div className="flex justify-center mb-6">
                <GoogleLogIn></GoogleLogIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
