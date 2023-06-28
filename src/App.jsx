import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="bg-zinc-900 container mx-auto p-10 min-w-full">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
