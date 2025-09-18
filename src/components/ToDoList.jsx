import { useState } from "react";
import "../styles/ToDo.css";
const ToDoList = [
  { id: 1, text: "Купити хліб", done: false, isEditing: false },
  { id: 2, text: "Вивчити React", done: true, isEditing: false },
  { id: 3, text: "Прочитати книгу", done: false, isEditing: false },
];

function ToDo() {
  const [tasks, setTasks] = useState(ToDoList);
  const [newTaskText, setNewTaskText] = useState("");

  const [filter, setFilter] = useState("all");

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

  const updateText = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };
  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "done" ? task.done : !task.done
  );
  const allCount = tasks.length;
  const doneCount = tasks.filter((task) => task.done).length;
  const undoneCount = tasks.filter((task) => !task.done).length;
  return (
    <div>
      <ul>
        {filteredTasks.map((task) =>
          task.isEditing ? (
            <div key={task.id}>
              <input
                key={task.id}
                value={task.text}
                onChange={(e) => updateText(task.id, e.target.value)}
              />
              <button onClick={() => toggleEdit(task.id)}>Зберегти</button>
            </div>
          ) : (
            <li key={task.id} className={task.done ? "done" : "undone"}>
              {task.isEditing ? (
                <>
                  <input
                    value={task.text}
                    onChange={(e) => updateText(task.id, e.target.value)}
                  />
                  <button onClick={() => toggleEdit(task.id)}>Зберегти</button>
                </>
              ) : (
                <>
                  {task.text} - {task.done ? "done" : "undone"}
                  <button onClick={() => toggleStatus(task.id)}>
                    Виконати
                  </button>
                  <button onClick={() => toggleEdit(task.id)}>
                    Редагувати
                  </button>
                </>
              )}
            </li>
          )
        )}
      </ul>

      <input
        type="text"
        placeholder="Введіть назву таски"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask}>Додати таску</button>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Усі{allCount}</option>
        <option value="done">Виконані {doneCount}</option>
        <option value="undone">Невиконані {undoneCount}</option>
      </select>
    </div>
  );
}
export default ToDo;
