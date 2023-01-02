import { useRef, useState } from "react";

import { useDragger } from "../hooks/useDragger";

export function Hotspot({ containerRef, hotspot, idx }) {
  const ref = useRef(null);
  const coords = useDragger(ref, containerRef);
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div
      ref={ref}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      key={hotspot.id}
      className={`${
        mouseDown ? "cursor-grabbing" : "cursor-grab"
      } transition-colors text-white text-center rounded-full w-8 h-8 flex items-center justify-center ${
        hotspot.highlighted ? "bg-pink-500" : "bg-slate-700"
      }`}
      style={{ top: `${coords.y}px`, left: `${coords.x}px`, position: "absolute" }}>
      {idx + 1}
    </div>
  );
}
