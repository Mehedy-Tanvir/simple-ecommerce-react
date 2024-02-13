import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center">
        Login to <strong>iMart</strong>
      </h1>
      <div className="hero">
        <div className="rounded-lg shadow-md card-body md:w-[450px]">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-500 label-text">
                  <strong>EMAIL</strong>
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-4 border-2 border-gray-300 rounded-lg outline-none focus:shadow-md hover:shadow-md hover:border-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-5 form-control">
              <label className="label">
                <span className="text-gray-500 label-text">
                  <strong>PASSWORD</strong>
                </span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:shadow-md hover:shadow-md hover:border-blue-500 focus:border-blue-500"
                  required
                />
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute text-2xl text-gray-400 top-4 right-3"
                  ></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute text-2xl text-gray-400 top-4 right-3"
                  ></AiOutlineEye>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="w-full mt-6 form-control">
                <button className="btn text-white hover:bg-blue-500 bg-blue-600 text-[15px]">
                  Login
                </button>
              </div>
              <div className="w-full mt-6 form-control">
                <button className="text-gray-500 text-[15px] shadow-none bg-transparent border-none btn hover:bg-transparent hover:text-blue-500">
                  Lost Your Password?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
