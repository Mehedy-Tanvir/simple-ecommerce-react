import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 navbar bg-base-100 font-inter">
      <div className="">
        <a className="text-xl btn bg-transparent hover:bg-transparent border-none shadow-none text-[18px]">
          iMart
        </a>
      </div>
      <div>
        <div className="flex justify-between gap-4">
          <div className="justify-between hidden gap-4 md:flex">
            <Link className="bg-transparent border-none shadow-none btn hover:bg-transparent hover:text-blue-500 text-[18px]">
              Log In
            </Link>

            <Link className="btn text-[18px] hover:text-white hover:bg-green-500">
              Sign up
            </Link>

            <Link
              to="/dashboard"
              className="btn text-[18px] hover:text-white hover:bg-green-500"
            >
              Dashboard
            </Link>
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

              <Link>
                <li className="text-[18px]">Login</li>
              </Link>

              <Link>
                <li className="text-[18px]">Register</li>
              </Link>

              <Link href="/dashboard">
                <li className="text-[18px]">Dashboard</li>
              </Link>

              <Link>
                <li className="text-[18px]">Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
