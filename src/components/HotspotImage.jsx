export function HotspotImage({ src, hotspots }) {
  return (
    <div className="w-100 relative">
      {src && <img src={src} alt="test" style={{ width: "100%", height: "100%" }} />}
      {hotspots.map((hotspot, idx) => (
        <div
          key={hotspot.id}
          className={`transition-colors text-white text-center rounded-full w-8 h-8 flex items-center justify-center ${
            hotspot.highlighted ? "bg-pink-500" : "bg-slate-700"
          }`}
          style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%`, position: "absolute" }}>
          {idx + 1}
        </div>
      ))}
    </div>
  );
}
