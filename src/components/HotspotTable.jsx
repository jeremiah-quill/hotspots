export function HotspotTable() {
  return (
    <table className="w-full table-auto">
      <thead className="bg-slate-800 sticky top-0">
        <tr>
          <th className="border-b border-slate-600 font-medium p-4 text-slate-200 text-left">
            Label
          </th>
          {Object.keys(data[0]).map((key) => (
            <th
              className="border-b border-slate-600 font-medium p-4 text-slate-200 text-left"
              key={key}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-slate-800">
        {data.map((row, idx) => (
          <tr key={idx}>
            {Object.values(row).map((cell, idx) => (
              <td className="border-b border-slate-700 p-4 text-slate-400" key={idx}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
