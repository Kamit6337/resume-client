import PortfolioData from "../../data/PortfolioData";
import ReactIcons from "../../assets/icons";
import { useState } from "react";

const LatestPortfolio = () => {
  const [index, setIndex] = useState(null);
  const [toggleShadow, setToggleShadow] = useState(false);

  const handleMouseEnter = (i) => {
    setIndex(i);

    setToggleShadow(true);
  };

  const handleMouseLeave = () => {
    setToggleShadow(false);
    setIndex(null);
  };

  return (
    <div>
      <div className="mb-32 flex flex-col gap-2 items-center">
        <p className="section_header capitalize text-center ">
          My Latest Featured Portfolio
        </p>
        <p className="text-sm text-gray-400 w-2/3 mobile:w-full text-center">
          Projects cover MERN Stack with Next JS, both are popular framework for
          making industry level, well developed and scalable Full-Stack Web Apps
        </p>
      </div>

      {PortfolioData.map((obj, i, arr) => {
        const { title, category, image, details, icons, github, preview } = obj;

        const lastDiv = i === arr.length - 1;

        return (
          <>
            <div key={i} className="flex gap-14 mobile:flex-col mobile:gap-0 ">
              <div className="w-2/5 mobile:w-full space-y-10">
                <div className="w-full">
                  <img src={image} alt={title} />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                  <a href={github} target="_blank" rel="noreferrer">
                    <p className="flex justify-center items-center text-xl py-2 border rounded ">
                      {ReactIcons.github}
                    </p>
                  </a>
                  <a href={preview} target="_blank" rel="noreferrer">
                    <div
                      className={`${
                        toggleShadow && i === index && "gradient_link_shadow"
                      } text-center rounded py-2 cursor-pointer gradient_link text-white duration-200`}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Preview
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div>
                  <p className="portfolio_title">{title}</p>
                  <p className="portfolio_category">({category})</p>
                </div>
                <div className="mb-10 mt-4">
                  <p className="text-gray-500 sm_lap:text-sm">Details :</p>
                  {details.map((detail, i) => {
                    return (
                      <div
                        key={i}
                        className="flex gap-1 pl-6 text-sm text-gray-500 mb-1"
                      >
                        <p className="pt-1">{ReactIcons.dash}</p>
                        <p className="sm_lap:text-xs sm_lap:tracking-wide">
                          {detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-6 tablet:gap-3 flex-wrap">
                  {icons.map((obj, i) => {
                    const { name, icon } = obj;

                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-between gap-1"
                      >
                        <p className="text-4xl sm_lap:text-3xl tablet:text-2xl">
                          {icon}
                        </p>
                        <p className="portfolio_category">{name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {!lastDiv && (
              <div className="w-32 mobile:w-16 h-[2px] bg-gray-300 rounded-xl mx-auto my-32" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default LatestPortfolio;
