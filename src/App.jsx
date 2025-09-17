// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
// import UserCard from './components/UserCard.jsx'
import UserList from './components/UserList.jsx';
import UserStatusList from './components/UserStatusList.jsx';
import ToDoList from './components/ToDoList.jsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
       <div>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
    {/* <UserCard name="Max" age={21} /> */}
    <UserList/>
    <UserStatusList/>
    <ToDoList/>
      </header>
    </div>
  );
}
export default App;
