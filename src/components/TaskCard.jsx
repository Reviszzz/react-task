import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, CheckTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1
        className="text-xl font-bold capitalize"
        style={{ color: task.color }}
      >
        {task.title}
      </h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <div>
        <button
          className="bg-blue-400  px-2 py-1 rounded-md mt-4 justify-end hover:bg-blue-300"
          onClick={() => CheckTask(task.id)}
        >
          completada
        </button>
      </div>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
