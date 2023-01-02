import { useEffect, useRef, useState } from "react";

import Draggable from "react-draggable";

export function Hotspot({ hotspot, idx, containerWidth, containerHeight, setHotspots }) {
  const [grabbed, setGrabbed] = useState(false);

  const nodeRef = useRef(null);

  function onStop(event, data) {
    const { x, y, node } = data;

    const newX = (x / containerWidth) * 100;
    const newY = (y / containerHeight) * 100;

    setHotspots((currHotspots) => {
      return currHotspots.map((hotspot) => {
        if (hotspot.id === hotspot.id) {
          return { ...hotspot, x: newX, y: newY };
        } else {
          return hotspot;
        }
      });
    });
  }

  return (
    // <Draggable key={hotspot.id} bounds="parent" nodeRef={nodeRef}>
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      key={hotspot.id}
      onStop={onStop}
      onMouseDown={() => setGrabbed(true)}
      onMouseUp={() => setGrabbed(false)}
      defaultPosition={{ x: 0, y: 0 }}>
      <div
        onMouseDown={() => setGrabbed(true)}
        onMouseUp={() => setGrabbed(false)}
        ref={nodeRef}
        className={`transition-colors text-white text-center rounded-full w-8 h-8 flex items-center justify-center bg-slate-700 absolute z-50 top-0 left-0 ${
          grabbed === true ? "cursor-grabbing" : "cursor-grab"
        }`}>
        {idx + 1}
      </div>
    </Draggable>
  );
}
