import backendData from "../data/MERN_Stack/backendData";

const BackendTechInfo = () => {
  return (
    <>
      {backendData.map((obj, i) => {
        const { title, points, icon } = obj;

        return (
          <section
            key={i}
            className="border border-gray-400 rounded-lg p-6 tablet:p-3 mobile:p-2 mb-6"
          >
            <div className="flex items-center mb-2">
              <div className="text-5xl mobile:text-4xl mr-4 mobile:mr-2">
                {icon}
              </div>
              <p className=" text-lg mobile:text-[14px] font-medium uppercase tracking-wide">
                {title}
              </p>
            </div>
            <ul className="list-disc px-10 mobile:px-8 mobile:text-xs font-thin text-gray-500 tracking-wide">
              {points.map((point, i) => {
                return (
                  <li key={i} className="mobile:mb-2">
                    {point}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default BackendTechInfo;
