/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactFlow, { Position } from "reactflow";

const ReactFlowChart = ({ source, targets, icon }) => {
  const [xCoor, setXCoor] = useState(null);

  useEffect(() => {
    const handleWindowWidth = () => {
      if (window.innerWidth < 640) {
        setXCoor(300);
      } else if (window.innerWidth < 760) {
        setXCoor(300);
      }
    };

    handleWindowWidth();

    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  console.log("xcor", xCoor);

  const initialNode = [
    {
      id: "1",
      position: { x: 0, y: 40 },
      data: {
        label: (
          <div className="py-2 px-5 uppercase text-base font-medium tracking-wide flex items-center gap-2">
            <div className="text-5xl">{icon}</div>
            <p>{source}</p>
          </div>
        ),
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Right,
      style: { padding: "0px", width: "auto", height: "auto" },
    },
    {
      id: "2",
      position: { x: xCoor || 500, y: 0 },
      data: {
        label: (
          <div className="px-4 py-2 tracking-wide max-w-96 font-thin text-gray-500">
            {targets[0]}
          </div>
        ),
      },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
      style: { padding: "0px", width: "auto", height: "auto" },
    },
    {
      id: "3",
      position: { x: xCoor || 500, y: 80 },
      data: {
        label: (
          <div className="px-4 py-2 tracking-wide max-w-96 font-thin text-gray-500">
            {targets[1]}
          </div>
        ),
      },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
      style: { padding: "0px", width: "auto", height: "auto" },
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
  ];

  return (
    <div
      className="bg-my_bg"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "inherit",
      }}
    >
      <div style={{ width: "100%", height: "100%", padding: "0px" }}>
        <ReactFlow
          nodes={initialNode}
          edges={initialEdges}
          fitView
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          nodesConnectable={false}
          style={{
            padding: "0px",
            margin: "0px",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        className="bg-white"
        style={{
          position: "absolute",
          zIndex: "200",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "25px",
        }}
      />
    </div>
  );
};

export default ReactFlowChart;
