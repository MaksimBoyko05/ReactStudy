import { useState } from "react";
import "../styles/ToDo.css";
const ToDoList = [
  { id: 1, text: "Купити хліб", done: false },
  { id: 2, text: "Вивчити React", done: true },
  { id: 3, text: "Прочитати книгу", done: false },
];

function ToDo() {
  const [tasks, setTasks] = useState(ToDoList);
  const [newTaskText, setNewTaskText] = useState("");

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "done" : "undone"}>
          {task.text} - {task.done ? "done" : "undone"}
          <button onClick={() => toggleStatus(task.id)}>Виконати</button>
        </li>
      ))}
      <input
        type="text"
        placeholder="Введіть назву таски"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={() => addTask()}>Додати таску</button>
    </ul>
  );
}
export default ToDo;
