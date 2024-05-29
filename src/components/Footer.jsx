import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();

  const isInContactPage = useMemo(() => {
    if (pathname === "/contact") {
      return true;
    }
    return false;
  }, [pathname]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center  text-white">
      <div className="my-auto">
        <Link to={`/contact`}>
          <p
            className="px-8 py-3 rounded-xl cursor-pointer shadow-xl border border-white"
            onClick={() =>
              isInContactPage &&
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Contact Me
          </p>
        </Link>
      </div>

      <p className="self-center mb-4 text-xs text-gray-500">
        {`Copyright ©${year} All rights reserved`}
      </p>
    </div>
  );
};

export default Footer;
