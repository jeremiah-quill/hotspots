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

  function highlightHotspot(id) {
    setHotspots((currHotspots) => {
      return currHotspots.map((hotspot) => {
        if (hotspot.id === id) {
          return { ...hotspot, highlighted: true };
        } else {
          return { ...hotspot, highlighted: false };
        }
      });
    });
  }
  return (
    <div className="md:grid grid-cols-2 h-full">
      <div className="bg-green-200">
        <div className="w-100 max-w-3xl border border-slate-700 p-8 rounded-xl m-auto">
          <input type="file" onChange={handleImageUpload} />
          <HotspotImage src={imageUrl} hotspots={hotspots} />
        </div>
      </div>
      <div className="bg-blue-200">
        <button
          className="text-4xl text-center bg-slate-900 text-white p-2 px-4 rounded-md block m-auto"
          onClick={handleNewHotspot}>
          Add Hotspot
        </button>
        <div className="grid grid-cols-6 justify-items-center gap-2 items-center bg-slate-700 text-white p-2 my-4">
          <div>Label</div>
          <div>Name</div>
          <div>Description</div>
          <div>X</div>
          <div>Y</div>
        </div>
        <ul className="grid gap-2">
          {hotspots.map((hotspot, idx) => (
            <li key={hotspot.id} onMouseOver={() => highlightHotspot(hotspot.id)}>
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
  );
}
