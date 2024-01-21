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
              <div className="service_icon">{icon}</div>
              <p className="service_title">{title}</p>
            </div>
            <ul className="list-disc px-10 mobile:px-8 service_point ">
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
