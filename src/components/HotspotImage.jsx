import { useRef } from "react";

import { Hotspot } from "./Hotspot";

export function HotspotImage({ src, hotspots }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="w-100 relative">
      {src && <img src={src} alt="test" style={{ width: "100%", height: "100%" }} />}
      {hotspots.map((hotspot, idx) => (
        <Hotspot containerRef={containerRef} key={hotspot.id} hotspot={hotspot} idx={idx} />
      ))}
    </div>
  );
}
