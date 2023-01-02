import { useRef } from "react";

import { Hotspot } from "./Hotspot";

export function HotspotImage({ src, hotspots, setHotspots }) {
  const containerRef = useRef(null);

  return (
    <div className="relative h-full" ref={containerRef}>
      {src && <img src={src} alt="test" style={{ width: "100%", height: "100%" }} />}
      {hotspots.map((hotspot, idx) => (
        <Hotspot
          setHotspots={setHotspots}
          key={hotspot.id}
          hotspot={hotspot}
          idx={idx}
          containerWidth={containerRef.current?.clientWidth}
          containerHeight={containerRef.current?.clientHeight}
        />
      ))}
    </div>
  );
}
