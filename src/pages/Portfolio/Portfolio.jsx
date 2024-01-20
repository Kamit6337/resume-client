import { useEffect } from "react";
import Header from "../../components/Header";
import LatestPortfolio from "./LatestPortfolio";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Resume | Portfolio";
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header to={"portfolio"} />
      <div className=" py-40 px-36 sm_lap:px-24 tablet:px-10 ">
        <LatestPortfolio />
      </div>
    </>
  );
};

export default Portfolio;
