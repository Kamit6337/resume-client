import { useEffect } from "react";
import Header from "../../components/Header";
import MERNStackServices from "./MERNStackServices";

const Services = () => {
  useEffect(() => {
    document.title = "Resume | Services";
    // // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-my_bg_5">
      <Header to={"service"} />
      <div className="px-48 py-20 sm_lap:px-32 tablet:px-16 mobile:px-4">
        <div className="flex flex-col gap-2 items-center">
          <p className="section_header">My Offered Services</p>
          <p className="section_para">
            The Full-Stack Web Development for the new world and new and popular
            technology and framework with better, readable and scalable code
          </p>
        </div>
        <div className="flex items-center justify-center gap-20 py-20 ">
          <p>MERN Stack</p>
          <p>Next JS</p>
        </div>

        <div className="  ">
          <MERNStackServices />
        </div>
      </div>
    </div>
  );
};

export default Services;
