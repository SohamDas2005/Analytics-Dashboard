export default function DataTable({
  data,
  sortType,
  setSortType,
  onToggleDone,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Task Manager</h2>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border px-3 py-1 rounded text-sm"
        >
          <option value="date-new">Date: Newest</option>
          <option value="date-old">Date: Oldest</option>
          <option value="priority-high">Priority: High → Low</option>
          <option value="priority-low">Priority: Low → High</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-gray-500">
            <th></th>
            <th className="py-2 text-left">Task</th>
            <th className="py-2">Priority</th>
            <th className="py-2">Status</th>
            <th className="py-2">User</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((task) => (
            <tr key={task.id} className="border-b hover:bg-gray-50">
          
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onToggleDone(task.id)}
                />
              </td>

              <td
                className={`py-2 ${
                  task.done ? "line-through text-gray-400" : ""
                }`}
              >
                {task.task}
              </td>

              <td className="py-2 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs text-white ${
                    task.priority === "High"
                      ? "bg-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                >
                  {task.priority}
                </span>
              </td>

              <td className="py-2 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs text-white ${
                    task.status === "Resolved"
                      ? "bg-green-600"
                      : task.status === "Open"
                      ? "bg-blue-600"
                      : "bg-gray-500"
                  }`}
                >
                  {task.status}
                </span>
              </td>

              <td className="py-2 text-center">{task.user}</td>
              <td className="py-2 text-center">{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
