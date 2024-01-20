/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactIcons from "../assets/icons";

const Header = ({ to }) => {
  return (
    <div className="w-full h-72 gradient_link text-white  flex flex-col justify-center items-center gap-6 ">
      <p className="section_header_title capitalize">
        {to === "about" ? "about me" : to}
      </p>
      <div className="flex items-center gap-4 text-sm tracking-wide">
        <p>
          <Link to={`/`}>Home</Link>
        </p>
        <p>{ReactIcons.arrowRight}</p>
        <p className="capitalize">
          <Link to={`/${to}`}>{to}</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
