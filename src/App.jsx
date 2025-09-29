import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ToDo from "./components/ToDoList";
import LoginForm from "./LoginForm";
import ContactList from "./components/ContactList";
import UserCard from "./components/UserCard";
import Users from "./components/UserList";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
     <AppContextProvider>
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
        <Route path="/users" element={<Users/>} />
        <Route
          path="/user-card/:id"
          element={<UserCard/>}
        />
      </Routes>
    </Router>
    </AppContextProvider>
  );
}

export default App;
