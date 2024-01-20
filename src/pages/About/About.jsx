import { useEffect } from "react";
import PersonalDetail from "../home/components/PersonalDetail";
import Header from "../../components/Header";
import Qualifications from "./components/Qualifications";

const About = () => {
  useEffect(() => {
    document.title = "Resume | About Me";
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header to={"about"} />
      <div
        className="bg-my_bg_10 px-48 sm_lap:px-20 tablet:px-16 mobile:px-8 py-28 tablet:py-32
      mobile:py-20"
      >
        <PersonalDetail />
      </div>
      <div className="py-32 ">
        <Qualifications />
      </div>
    </>
  );
};

export default About;
