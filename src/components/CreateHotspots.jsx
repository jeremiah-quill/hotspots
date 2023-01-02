import { HotspotListItem } from "../components/HotspotListItem";
import { HotspotImage } from "../components/HotspotImage";
import { useState } from "react";
import uuid from "react-uuid";

export function CreateHotspots() {
  const [imageUrl, setImageUrl] = useState(null);
  const [hotspots, setHotspots] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const handleNewHotspot = () => {
    setHotspots([
      ...hotspots,
      { id: uuid(), name: "test name", description: "test description", x: 0, y: 0 },
    ]);
  };

  function handleHotspotChange(event, id) {
    setHotspots((currHotspots) => {
      return currHotspots.map((hotspot) => {
        if (hotspot.id === id) {
          return { ...hotspot, [event.target.name]: event.target.value };
        } else {
          return hotspot;
        }
      });
    });
  }

  function removeHotspot(id) {
    setHotspots((currHotspots) => {
      return currHotspots.filter((hotspot) => hotspot.id !== id);
    });
  }

  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full">
      <div className="bg-green-200 grid place-items-center p-4 relative">
        <input
          className="absolute left-1/2 -translate-x-1/2 z-30 top-5 bg-blue-500 p-2 rounded-md "
          type="file"
          onChange={handleImageUpload}
        />
        <div
          className={`${
            !imageUrl ? "border-slate-700 aspect-square" : "border-transparent"
          } w-full max-w-3xl border-dashed border-2 border-slate-700 rounded-xl m-auto`}>
          <HotspotImage src={imageUrl} hotspots={hotspots} setHotspots={setHotspots} />
        </div>
      </div>
      <div className="bg-blue-200 p-4 grid pt-32 h-full">
        <div>
          <button
            className="text-4xl text-center bg-slate-900 text-white p-2 px-4 rounded-md block m-auto"
            onClick={handleNewHotspot}>
            Add Hotspot
          </button>
          <div className="grid grid-cols-4 justify-items-center gap-2 items-center bg-slate-700 text-white p-2 my-4">
            <div>Label</div>
            <div>Name</div>
            <div>Description</div>
          </div>
          <ul className="grid gap-2">
            {hotspots.map((hotspot, idx) => (
              <li key={hotspot.id}>
                <HotspotListItem
                  hotspot={hotspot}
                  number={idx + 1}
                  onChange={handleHotspotChange}
                  removeHotspot={removeHotspot}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
