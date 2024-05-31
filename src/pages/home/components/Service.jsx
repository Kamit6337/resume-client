import { useState } from "react";
import ReactFlowComponent from "../../../components/ReactFlowComponent";
import BackendTechInfo from "../../../components/BackendTechInfo";
import frontendData from "../../../data/MERN_Stack/frontendData";
import NextJSInfo from "../../../components/NextJSInfo";

const Service = () => {
  const [showBackend, setShowBackend] = useState(false);
  const [showNextJS, setShowNextJS] = useState(false);

  return (
    <section className="">
      <div className="flex flex-col gap-2 items-center">
        <p className="section_header text-center">My Offered Services</p>
        <p className="section_para">
          The Full-Stack Web Development for the new world and new and popular
          technology and framework with better, readable and scalable code
        </p>
      </div>

      <header className="w-full flex uppercase text-xl mobile:text-lg mt-20 mb-10 mobile:mt-12 mobile:mb-6">
        <p
          className={`${
            !showNextJS && "border-b border-hover_link text-hover_link"
          }  service_option`}
          onClick={() => setShowNextJS(false)}
        >
          MERN Stack
        </p>
        <p
          className={`${
            showNextJS && "border-b border-hover_link text-hover_link"
          }  service_option`}
          onClick={() => setShowNextJS(true)}
        >
          Next JS
        </p>
      </header>

      {!showNextJS && (
        <>
          <div className="flex uppercase justify-center gap-2 my-10">
            <p
              className={`${
                !showBackend && "border border-hover_link text-hover_link"
              } mern_stack_option`}
              onClick={() => setShowBackend(false)}
            >
              Frontend
            </p>
            <p
              className={`${
                showBackend && "border border-hover_link text-hover_link"
              } mern_stack_option`}
              onClick={() => setShowBackend(true)}
            >
              Backend
            </p>
          </div>

          {!showBackend ? (
            <div className="w-full h-full px-10 sm_lap:px-0 ">
              <ReactFlowComponent data={frontendData} />
            </div>
          ) : (
            <div className="w-full h-full  px-20 sm_lap:mt-12 mobile:mt-6 tablet:px-10 mobile:px-4">
              <BackendTechInfo />
            </div>
          )}
        </>
      )}
      {showNextJS && <NextJSInfo />}
    </section>
  );
};

export default Service;
