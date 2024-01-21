/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import ReactFlow, { Position } from "reactflow";

const sourceDiv = (icon, source, height) => {
  return {
    id: "1",
    position: { x: 0, y: height / 4 },
    data: {
      label: (
        <div className="py-2 px-5 mobile:px-1 tablet:px-3 uppercase text-base font-medium tracking-wide flex items-center gap-2 mobile:gap-1">
          <div className="text-5xl tablet:text-3xl mobile:text-xl">{icon}</div>
          <p className="mobile:text-xs ">{source}</p>
        </div>
      ),
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    style: { padding: "0px", width: "auto", height: "auto" },
  };
};

const targetDiv = (id, target, xCoor, height) => {
  return {
    id: `${id}`,
    position: { x: xCoor || 600, y: height },
    data: {
      label: (
        <div className="px-4 py-2 tablet:text-[10px] tablet:tracking-wider tracking-wide max-w-96 tablet:max-w-72 mobile:w-60 font-thin text-gray-500">
          {target}
        </div>
      ),
    },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
    style: { padding: "0px", width: "auto", height: "auto" },
  };
};

const ReactFlowChartDummy = ({ source, targets, icon }) => {
  const [xCoor, setXCoor] = useState(null);
  const [initialNode, setInitialNode] = useState([]);
  const [initialEdge, setInitialEdge] = useState([]);
  const [height, setHeight] = useState(220);

  const handleWindowWidth = useCallback(() => {
    if (!targets || targets?.length === 0) {
      return null;
    }

    if (window.outerWidth < 640) {
      setXCoor(window.outerWidth / 2.8);
      setHeight(90 * targets.length);
    } else if (window.outerWidth < 770) {
      setXCoor(300);
      setHeight(100 * targets.length);
    } else if (window.outerWidth < 1030) {
      setXCoor(window.outerWidth / 3);
      setHeight(110 * targets.length);
    } else {
      setXCoor(window.outerWidth / 3);
      setHeight(130 * targets.length);
    }

    const targetNodes = targets.map((target, i, arr) => {
      let targetHeight = height / 2;

      if (arr.length === 1) {
        targetHeight = targetHeight / 2;
      }

      if (arr.length === 2) {
        targetHeight = i * targetHeight;
      }

      if (arr.length >= 3) {
        targetHeight = i * (targetHeight / (arr.length - 1 - 0.4));
      }

      return targetDiv(i + 2, target, xCoor, targetHeight);
    });

    const edges = targets.map((target, i) => {
      // { id: "e1-2", source: "1", target: "2" },

      const obj = {
        id: `e1-${i + 2}`,
        source: "1",
        target: `${i + 2}`,
      };
      return obj;
    });

    setInitialEdge(edges);

    setInitialNode([sourceDiv(icon, source, height), ...targetNodes]);

    // setInitialNode([
    //   {
    //     id: "1",
    //     position: { x: 0, y: height / 4 },
    //     data: {
    //       label: (
    //         <div className="py-2 px-5 mobile:px-1 tablet:px-3 uppercase text-base font-medium tracking-wide flex items-center gap-2 mobile:gap-1">
    //           <div className="text-5xl tablet:text-3xl mobile:text-xl">
    //             {icon}
    //           </div>
    //           <p className="mobile:text-xs ">{source}</p>
    //         </div>
    //       ),
    //     },
    //     sourcePosition: Position.Right,
    //     targetPosition: Position.Right,
    //     style: { padding: "0px", width: "auto", height: "auto" },
    //   },
    //   {
    //     id: "2",
    //     position: { x: xCoor || 600, y: 0 },
    //     data: {
    //       label: (
    //         <div className="px-4 py-2 tablet:text-[10px] tablet:tracking-wider tracking-wide max-w-96 tablet:max-w-72 mobile:w-60 font-thin text-gray-500">
    //           {targets[0]}
    //         </div>
    //       ),
    //     },
    //     sourcePosition: Position.Left,
    //     targetPosition: Position.Left,
    //     style: { padding: "0px", width: "auto", height: "auto" },
    //   },
    //   {
    //     id: "3",
    //     position: { x: xCoor || 600, y: height / 2 },
    //     data: {
    //       label: (
    //         <div className="px-4 py-2 tablet:text-[10px] tablet:tracking-wider tracking-wide max-w-96 tablet:max-w-72 mobile:w-60 font-thin text-gray-500">
    //           {targets[1]}
    //         </div>
    //       ),
    //     },
    //     sourcePosition: Position.Left,
    //     targetPosition: Position.Left,
    //     style: { padding: "0px", width: "auto", height: "auto" },
    //   },
    // ]);
  }, [source, targets, icon, xCoor, height]);

  useEffect(() => {
    handleWindowWidth();

    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [handleWindowWidth]);

  return (
    <div
      className="bg-my_bg  w-full"
      style={{
        position: "relative",
        backgroundColor: "inherit",
        height: height,
      }}
    >
      <div style={{ width: "100%", height: "100%", padding: "0px" }}>
        <ReactFlow
          nodes={initialNode}
          edges={initialEdge}
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

export default ReactFlowChartDummy;
