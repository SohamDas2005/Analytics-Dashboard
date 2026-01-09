import { useState } from "react";
import DataTable from "../components/DataTable";
import { tasks as initialTasks } from "../data/tableData";

export default function Tables() {
  const [taskList, setTaskList] = useState(initialTasks);
  const [sortType, setSortType] = useState("date-new");

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

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Tables</h1>

      <DataTable
        data={taskList}
        sortType={sortType}
        setSortType={setSortType}
        onToggleDone={toggleTaskDone}
      />
    </div>
  );
}
