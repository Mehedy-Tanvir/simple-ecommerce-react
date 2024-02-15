import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar goes here */}
      <Navbar></Navbar>
      {/* children are rendered here */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
