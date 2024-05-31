/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactIcons from "../assets/icons";
import CustomImages from "../assets/images";

const navLinkList = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  // { name: "SERVICE", href: "/service" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

const Navbar = ({ handleBlur }) => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHamburger = () => {
    handleBlur(true);
    setShowSideNav(true);
  };

  const handleCancel = () => {
    setShowSideNav(false);
    handleBlur(false);
  };

  return (
    <nav className="relative w-full h-full">
      <nav className="px-32 sm_lap:px-24 tablet:px-16  mobile:px-10 w-full h-full flex justify-between items-center text-black">
        <Link to={`/`}>
          <div className="w-32">
            <img
              src={CustomImages.profileLogo}
              alt="Profile Logo"
              className="w-full object-cover"
            />
          </div>
        </Link>

        {showHamburger ? (
          <div className="cursor-pointer" onClick={handleHamburger}>
            {ReactIcons.hamburger}
          </div>
        ) : (
          <section className="flex justify-end gap-12 tablet:gap-7 items-center text-xs ">
            {navLinkList.map((obj, i) => {
              const { name, href } = obj;

              return (
                <div key={i} className="tracking-wider hover:text-hover_link">
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      isActive ? "text-hover_link" : ""
                    }
                  >
                    {name}
                  </NavLink>
                </div>
              );
            })}
          </section>
        )}
      </nav>

      {/* MARK: SIDENAVBAR */}
      <div
        className={`absolute z-10 top-0 left-0 flex -translate-x-full transition-all duration-500
        ${showSideNav && "translate-x-0 "}
        `}
      >
        <div
          className="bg-black h-screen pt-20  flex flex-col items-center gap-8"
          style={{ width: `${window.innerWidth / 2}px` }}
        >
          {navLinkList.map((obj, i) => {
            const { name, href } = obj;

            return (
              <div
                key={i}
                className="tracking-wider hover:text-hover_link text-white text-xs"
              >
                <NavLink
                  to={href}
                  onClick={handleCancel}
                  className={({ isActive }) =>
                    isActive ? "text-hover_link" : ""
                  }
                >
                  {name}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div onClick={handleCancel} className="cursor-pointer text-3xl">
          {ReactIcons.cancel}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
