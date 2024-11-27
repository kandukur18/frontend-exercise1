 const DataTable = ({ data, onDelete }) => {
    return (
      <div className="p-4">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Data</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50">
                <td className="border p-3 text-center">{index + 1}</td>
                <td className="border p-3">{item}</td>
                <td className="border p-3 text-center">
                  <button
                    onClick={() => onDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DataTable;
  