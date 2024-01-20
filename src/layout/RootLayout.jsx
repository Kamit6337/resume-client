import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const RootLayout = () => {
  const [blurScreen, setBlurScreen] = useState(false);

  const handleBlur = (bool) => {
    setBlurScreen(bool);
  };

  return (
    <div className="w-screen h-auto">
      <div
        className="h-20 laptop:h-16 mobile:h-14 w-full sticky top-0 shadow-lg bg-white "
        style={{ zIndex: 999 }}
      >
        <Navbar handleBlur={handleBlur} />
        {blurScreen && (
          <div className="absolute top-0 h-screen w-full backdrop-blur-sm" />
        )}
      </div>
      <div className="h-full w-full">
        <Outlet />
        <div className="bg-my_footer h-96 sm_lap:h-72">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
