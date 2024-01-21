/* eslint-disable react/prop-types */
import ReactFlowChartDummy from "../lib/ReactFlow/dummyFlow";

const ReactFlowComponent = ({ data }) => {
  return (
    <div className="w-full h-full bg-inherit px-6 pt-8 mobile:px-3">
      {data.map((obj, i) => {
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

export default ReactFlowComponent;
