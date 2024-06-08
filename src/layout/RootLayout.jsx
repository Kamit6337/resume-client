import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../lib/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="w-screen h-auto">
      <div
        className="h-20 laptop:h-16 mobile:h-14 w-full sticky top-0 shadow-lg bg-white "
        style={{ zIndex: 499 }}
      >
        <Navbar />
      </div>
      <div className="h-full w-full">
        <Outlet />
        <div className="bg-my_footer h-96 sm_lap:h-72">
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
