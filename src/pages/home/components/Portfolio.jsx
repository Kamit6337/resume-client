import { useState } from "react";
import PortfolioData from "../../../data/PortfolioData";
import { Link } from "react-router-dom";

const Portfolio = () => {
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
      <div className="flex flex-col gap-3 items-center mb-32 sm_lap:mb-28 mobile:mb-20">
        <p className="section_header capitalize text-center ">
          My Latest Featured Portfolio
        </p>
        <p className="section_para">
          Projects cover MERN Stack with Next JS, both are popular framework for
          making industry level, well developed and scalable Full-Stack Web Apps
        </p>
      </div>

      <div className="w-full grid grid-cols-2 mobile:grid-cols-1  justify-items-center gap-y-20">
        {PortfolioData.map((portfolio, i) => {
          const { title, category, image } = portfolio;

          return (
            <div key={i} className="w-96 sm_lap:w-72 flex flex-col gap-4">
              <div className="transition-all duration-1000 relative h-[420px] sm_lap:h-80 rounded-xl ">
                <img
                  src={image}
                  alt="portfolio"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="portfolio_title">{title}</p>
                <p className="portfolio_category">({category})</p>
              </div>

              <Link to={`/portfolio`} state={{ scrollTo: title }}>
                <div
                  className={`${
                    toggleShadow && i === index && "gradient_link_shadow"
                  } mx-auto rounded-lg px-6 py-2 w-max gradient_link text-white duration-200`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  View Full Detail
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
