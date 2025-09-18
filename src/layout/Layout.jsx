import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

import Footer from "../Footer/Footer";


const Layout = () => {

  return (
    <div className="dark:bg-pink-300 bg-[#3e4369] dark:text-black text-white">
      <Navbar />

    <div className="">
      <Outlet />
    </div>

      <div className="bg-[#161b3d] dark:bg-white dark:text-black text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
