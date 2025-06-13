//tüm görev listesini gösterir

import { useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";
import StatusFilter from "./StatusFilter";

function TaskList() {
    const tasks = useSelector((state) => state.tasks).items;
    const [filter,setFilter]=useState("all")
  console.log(tasks);

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true; //all
    });
  return (
    <div>
      <StatusFilter currentFilter={filter} onFilterChange={setFilter} />
      {filteredTasks.length === 0 ? (
        <p>Henüz görev yok</p>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
}
export default TaskList;
