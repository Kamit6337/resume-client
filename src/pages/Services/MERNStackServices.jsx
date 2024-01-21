import mernStackData from "../../data/MERN_Stack/mernStackData";

const MERNStackServices = () => {
  return (
    <div className="border border-my_bg rounded-xl p-8 mobile:p-4 ">
      {mernStackData.map((data, i, arr) => {
        const { title, points, icon } = data;

        const lastDiv = i === arr.length - 1;

        return (
          <>
            <div key={i}>
              <div className="flex items-center">
                <p className="service_icon">{icon}</p>
                <p className="service_title">{title}</p>
              </div>
              <ul className="list-disc px-16 mobile:px-8 service_point mt-2">
                {points.map((point, i) => {
                  return <li key={i}>{point}</li>;
                })}
              </ul>
            </div>
            {!lastDiv && (
              <div className="flex justify-center items-center gap-4 my-20 mobile:my-12">
                {Array.from({ length: 3 }).map((_, i) => {
                  return (
                    <div
                      key={i}
                      className="w-[6px] h-[6px] rounded-full bg-gray-300"
                    />
                  );
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default MERNStackServices;
