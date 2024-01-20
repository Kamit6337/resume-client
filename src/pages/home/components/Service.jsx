import { useState } from "react";
import FrontendReactFlow from "../../../components/FrontendReactFlow";
import BackendTechInfo from "../../../components/BackendTechInfo";

const Service = () => {
  const [showBackend, setShowBackend] = useState(false);

  return (
    <section className="">
      <p className="section_header text-center">My Offered Services</p>
      <p className="uppercase mt-20 mb-10 mobile:mt-12 mobile:mb-6 text-center">
        Full Stack web development
      </p>
      <main className="w-full">
        <header className="w-full flex uppercase text-xl mobile:text-lg">
          <p
            className={`${
              !showBackend && "border-b border-hover_link text-hover_link"
            }  w-1/2   py-2 font-semibold tracking-wider cursor-pointer text-center hover:bg-my_hover_header hover:text-hover_link`}
            onClick={() => setShowBackend(false)}
          >
            Frontend
          </p>
          <p
            className={`${
              showBackend && "border-b border-hover_link text-hover_link"
            }  w-1/2   py-2 font-semibold tracking-wider cursor-pointer  text-center hover:bg-my_hover_header hover:text-hover_link`}
            onClick={() => setShowBackend(true)}
          >
            Backend
          </p>
        </header>

        {!showBackend ? (
          <div className="w-full h-full px-10 sm_lap:px-0 ">
            <FrontendReactFlow />
          </div>
        ) : (
          <div className="w-full h-full mt-16 px-20 sm_lap:mt-12 mobile:mt-6 tablet:px-10 mobile:px-4    ">
            <BackendTechInfo />
          </div>
        )}
      </main>
    </section>
  );
};

export default Service;
