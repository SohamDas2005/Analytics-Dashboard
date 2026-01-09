import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KpiCard from "../components/KpiCard";
import LineChartBox from "../components/LineChartBox";
import PieChartBox from "../components/PieChartBox";
import DataTable from "../components/DataTable";
import {
  kpiData,
  trafficData,
  pieData,
} from "../data/dashboardData";
import { tasks as initialTasks } from "../data/tableData";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [taskList, setTaskList] = useState(initialTasks);
  const [sortType, setSortType] = useState("date-new");
  const [showForm, setShowForm] = useState(false);

  // form state
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Open");
  const [user, setUser] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!task || !user) return;

    const newTask = {
      id: taskList.length + 1,
      task,
      priority,
      status,
      user,
      date: new Date().toISOString().split("T")[0],
      done: status === "Resolved",
    };

    setTaskList([newTask, ...taskList]);

    setTask("");
    setPriority("Medium");
    setStatus("Open");
    setUser("");
    setShowForm(false);
  }

  function toggleTaskDone(id) {
    setTaskList(
      taskList.map((t) =>
        t.id === id
          ? {
              ...t,
              done: !t.done,
              status: !t.done ? "Resolved" : "Open",
            }
          : t
      )
    );
  }

  // search
  let filteredTasks = taskList.filter((t) =>
    t.task.toLowerCase().includes(search.toLowerCase())
  );

  // sort
  filteredTasks = [...filteredTasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    if (sortType === "date-new")
      return new Date(b.date) - new Date(a.date);
    if (sortType === "date-old")
      return new Date(a.date) - new Date(b.date);
    if (sortType === "priority-high")
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    if (sortType === "priority-low")
      return priorityOrder[b.priority] - priorityOrder[a.priority];

    return 0;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar search={search} setSearch={setSearch} />

        <div className="p-6 space-y-6">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((item, i) => (
              <KpiCard key={i} {...item} />
            ))}
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChartBox data={trafficData} />
            <PieChartBox data={pieData} />
          </div>

          
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Task Manager</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              + Add Task
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={addTask}
              className="grid md:grid-cols-4 gap-4 bg-white p-4 rounded"
            >
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Task name"
                className="border p-2 rounded"
              />

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 rounded"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 rounded"
              >
                <option>Open</option>
                <option>Resolved</option>
                <option>On Hold</option>
              </select>

              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Assigned user"
                className="border p-2 rounded"
              />

              <button
                type="submit"
                className="md:col-span-4 bg-green-600 text-white py-2 rounded"
              >
                Save Task
              </button>
            </form>
          )}

          <DataTable
            data={filteredTasks}
            sortType={sortType}
            setSortType={setSortType}
            onToggleDone={toggleTaskDone}
          />
        </div>
      </div>
    </div>
  );
}
