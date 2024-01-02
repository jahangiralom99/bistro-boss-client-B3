import { useEffect, useRef, useState } from "react";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import sideImg from "../../assets/login/authentication2 1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
    const captchaRef = useRef();
  const [isShow, setIsShow] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisables] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setError("");
  };

    const captchaValid = () => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value)) {
            setDisables(false);
        } else {
            setDisables(true);
        }
  };

  return (
    <div className="bg-[url('https://i.postimg.cc/Yqcq6KX6/Rectangle-77.png')] shadow-2xl bg-no-repeat">
      <div className="px-6">
        <div className="flex min-h-full items-center flex-1 flex-col md:flex-row justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h- w-auto border"
              src={sideImg}
              alt="Your Company"
            />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-8 text-center text-4xl font-bold leading-9 tracking-tight italic">
              Login
            </h2>
            <form onSubmit={handleSubmitBtn} className="space-y-6 mt-8">
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
                    placeholder="Your email"
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

                <div className="mt-4">
                  <label className="">
                    <LoadCanvasTemplate />
                  </label>
                  <div className="">
                    <input ref={captchaRef}
                      id="Captcha"
                      name="captcha"
                      type="Captcha"
                      autoComplete="Captcha"
                      required
                      placeholder="Captcha "
                      className="block font-semibold pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button onClick={captchaValid} className="btn btn-sm">
                      Check
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button disabled={disabled}
                  type="submit"
                  className=" btn btn-primary w-full bg-[#D1A054] hover:bg-[#8a6d41] font-bold text-white border-none"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500">
              New here to Please ?
              <button className="btn btn-link">
                <Link to="/register">Register</Link>
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
  );
};

export default Login;
