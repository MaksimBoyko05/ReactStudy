import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ToDo from "./components/ToDoList";
import LoginForm from "./LoginForm";
import ContactList from "./components/ContactList";
import UserCard from "./components/UserCard";
import Users from "./components/UserList";

function App() {
  const users = [
    { id: 1, name: "Max", status: "online", isEditing: false },
    { id: 2, name: "Bob", status: "offline", isEditing: false },
    { id: 3, name: "Ivan", status: "online", isEditing: false },
  ];
  const [usersList, setUsers] = useState(users);
  const toggleStatus = (id) => {
    setUsers(
      usersList.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "online" ? "offline" : "online" }
          : user
      )
    );
  };

  const addUser = (name, status) => {
    const newUser = { id: Date.now(), name, status: status.toLowerCase() };
    setUsers([...usersList, newUser]);
  };
const editUser = (id, newName, newStatus) => {
  setUsers(usersList.map(u => 
    u.id === id ? {...u, name: newName, status: newStatus} : u
  ));
};

  return (
    <Router>
      <nav>
        <Link to="/">ToDo</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/users" element={<Users users={usersList} onAddUser={addUser} onEditUser={editUser} />} />
        <Route
          path="/user-card/:id"
          element={<UserCard users={usersList} toggleStatus={toggleStatus} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
