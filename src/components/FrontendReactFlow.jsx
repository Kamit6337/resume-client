import frontendData from "../data/MERN_Stack/frontendData";
import ReactFlowChartDummy from "../lib/ReactFlow/dummyFlow";

const FrontendReactFlow = () => {
  return (
    <div className="w-full h-full bg-inherit px-6 pt-8 mobile:px-3">
      {frontendData.length > 0 &&
        frontendData.map((obj, i) => {
          const { title, points, icon } = obj;

          return (
            <>
              {/* <ReactFlowChart icon={icon} source={title} targets={points} /> */}
              <ReactFlowChartDummy
                icon={icon}
                source={title}
                targets={points}
                key={i}
              />
            </>
          );
        })}
    </div>
  );
};

export default FrontendReactFlow;
