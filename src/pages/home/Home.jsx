import { useEffect } from "react";
import Hero from "./components/Hero";
import PersonalDetail from "./components/PersonalDetail";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

const Home = () => {
  useEffect(() => {
    document.title = "Resume | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-my_bg_10 px-32 sm_lap:px-24 tablet:px-16 mobile:px-8 py-36 mobile:py-24">
        <Hero />
      </div>
      <div className="bg-my_bg_5 py-48 tablet:py-32  mobile:py-20">
        <PersonalDetail />
      </div>
      <div className="px-32 sm_lap:px-20 tablet:px-12 mobile:px-0  py-24 mobile:py-20">
        <Service />
      </div>
      <div
        className="bg-my_bg_5 px-32 sm_lap:px-24 tablet:px-12 mobile:px-8 py-40 sm_lap:py-32
      mobile:py-20
      "
      >
        <Portfolio />
      </div>
    </>
  );
};

export default Home;
