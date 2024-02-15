import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  // getting states using context api
  const { user, loading, setUser, setLoading } = useContext(AuthContext);
  // user logout function
  const logout = () => {
    setLoading(true);
    try {
      // removing token from local storage
      localStorage.removeItem("token");
      //   updating states
      setUser(null);
      setLoading(false);

      toast.success("User logged out...");
    } catch (error) {
      console.error("Error:", error);
      //   updating states
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-between p-4 navbar bg-base-100 font-inter">
      <div className="">
        <a className="btn bg-transparent font-semibold hover:bg-transparent border-none shadow-none text-[32px]">
          iMart
        </a>
      </div>
      <div>
        <div className="flex justify-between gap-4">
          <div className="justify-between hidden gap-4 md:flex">
            {/* conditional rendering of login */}
            {!loading && !user && (
              <Link
                to="/login"
                className="btn text-[18px] hover:text-white hover:bg-green-500"
              >
                Log In
              </Link>
            )}
          </div>
          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="text-white bg-gray-400 rounded-full hover:text-gray-600 btn"
            >
              <FiMenu className="text-[18px]" />
            </div>
            <ul
              tabIndex={0}
              className="menu space-y-4 menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li className="text-[18px]">Home</li>
              </Link>
              {/* conditional rendering of login */}
              {!loading && !user && (
                <Link to="/login">
                  <li className="text-[18px]">Login</li>
                </Link>
              )}
              {/* conditional rendering of logout */}
              {!loading && user && (
                <Link onClick={logout}>
                  <li className="text-[18px]">Logout</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
