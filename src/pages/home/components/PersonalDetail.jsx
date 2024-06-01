import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomImages from "../../../assets/images";

const PersonalDetail = () => {
  const [showShadow, setShowShadow] = useState(false);

  const { pathname } = useLocation();

  const isInAboutPage = useMemo(() => {
    if (pathname === "/about") {
      return true;
    }
    return false;
  }, [pathname]);

  return (
    <section className="w-full h-full flex gap-20 sm_lap:gap-10 tablet:gap-5 mobile:flex-col mobile:gap-10 justify-center mobile:items-center">
      <div className="w-96 h-96 tablet:w-72 tablet:h-72 shadow-xl flex justify-center">
        <img
          src={CustomImages.profile}
          alt="profile"
          className="h-full object-cover"
        />
      </div>
      <main className="w-96 uppercase mt-10 tablet:mt-6">
        <p className="tracking-wide text-sm">About me</p>
        <p className="section_header mt-10 mb-6 tablet:mt-6 tablet:mb-2">
          Personal Details
        </p>
        <p className="text_para">
          i am graduated from banaras hindu university, varanasi, india. i
          started follow my passion of web development from various different
          sources and platforms.{" "}
        </p>
        <button
          className={`${
            showShadow && "gradient_link_shadow"
          } gradient_link px-6 py-[10px] text-white tracking-wider mt-12 mb-6 uppercase text-sm transition-all duration-300`}
          onMouseEnter={() => setShowShadow(true)}
          onMouseLeave={() => setShowShadow(false)}
          onClick={() =>
            isInAboutPage &&
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <Link to={`/about`}>View full detail</Link>
        </button>
      </main>
    </section>
  );
};

export default PersonalDetail;
