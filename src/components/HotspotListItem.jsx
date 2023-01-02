export function HotspotListItem({ hotspot, onChange, removeHotspot, number }) {
  return (
    <div className="grid grid-cols-4 justify-items-center gap-2 items-center">
      <h2>{number}</h2>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          className="w-full rounded-lg p-2"
          type="text"
          value={hotspot.name}
          name="name"
          onChange={(e) => onChange(e, hotspot.id)}
        />
      </div>
      <div>
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <input
          className="w-full rounded-lg p-2"
          type="text"
          value={hotspot.description}
          name="description"
          onChange={(e) => onChange(e, hotspot.id)}
        />
      </div>
      <div>
        <label htmlFor="remove" className="sr-only">
          Remove:
        </label>
        <input
          className="cursor-pointer w-full"
          type="button"
          name="remove"
          value="Remove"
          onClick={() => removeHotspot(hotspot.id)}
        />
      </div>
    </div>
  );
}
