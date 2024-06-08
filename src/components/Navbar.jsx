/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactIcons from "../assets/icons";
import CustomImages from "../assets/images";
import { navLinkList } from "../../constants";
import { Box, Drawer, List } from "@mui/material";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

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
          <div className="cursor-pointer" onClick={toggleDrawer(true)}>
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
      <Drawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        className=""
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="bg-my_footer h-screen pt-20"
        >
          <List className="flex flex-col items-center gap-8">
            {navLinkList.map((obj, i) => {
              const { name, href } = obj;

              return (
                <div
                  key={i}
                  className="tracking-wider hover:text-hover_link text-white text-xs"
                >
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
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
