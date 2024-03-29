import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { setUser, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending post request to server for login
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid credentials") {
          return toast.error(data.message);
        } else {
          // saving the token to local storage
          localStorage.setItem("token", data.token);
          // sending the post request to server with token to get user information
          fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              // updating the states
              if (data.message === "invalid signature") {
                setUser(null);
                setLoading(false);
              } else {
                setUser(data);
                setLoading(false);
                toast.success("User logged in...");
                navigate("/");
              }
            })
            .catch((error) => {
              console.log(error);
              setUser(null);
              setLoading(false);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to log in...");
      });
  };

  return (
    <div className="mt-10">
      <h1 className="mb-6 text-3xl text-center">
        Login to <strong>iMart</strong>
      </h1>
      <div className="hero">
        <div className="rounded-lg shadow-md card-body md:w-[450px]">
          <form onSubmit={handleSubmit}>
            {/* username input */}
            <div className="form-control">
              <label className="label">
                <span className="text-gray-500 label-text">
                  <strong>USERNAME</strong>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="p-4 border-2 border-gray-300 rounded-lg outline-none focus:shadow-md hover:shadow-md hover:border-blue-500 focus:border-blue-500"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* password input */}
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
                  value={password}
                  //   password showing and hiding functionality
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex flex-col items-center justify-between gap-4">
              {/* login button */}
              <div className="w-full mt-6 form-control">
                <button
                  type="submit"
                  className="btn text-white hover:bg-blue-500 bg-blue-600 text-[15px]"
                >
                  Login
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
