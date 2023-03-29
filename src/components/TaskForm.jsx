import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescrption("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">
          Create tu tarea
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="escirbe la descripcion de la tarea"
          onChange={(e) => setDescrption(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-green-600 rounded-md p-1 hover:bg-green-400
         text-zinc-50 font-semibold"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
