import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import sideImg from "../../assets/login/authentication2 1.png";
import { useState } from "react";


const Register = () => {
    const [isShow, setIsShow] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmitBtn = (e) => {
        e.preventDefault();
        setError('');
    }

    return (
        <div>
            <div className="bg-[url('https://i.postimg.cc/Yqcq6KX6/Rectangle-77.png')] shadow-2xl">
      <div className="px-6">
        <div className="flex min-h-full items-center flex-1 flex-col md:flex-row justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h- w-auto border"
              src={sideImg}
              alt="Your Company"
            />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
              Register 
            </h2>
            <form onSubmit={handleSubmitBtn} className="space-y-6 mt-12">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your Email"
                    className="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    type={isShow ? "text" : "password"}
                    autoComplete="current-password"
                    required
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
              <div className="text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;