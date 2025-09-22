import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { useState } from "react";
import ToDo from "./components/ToDoList";
import LoginForm from "./LoginForm";
import ContactList from "./components/ContactList"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">ToDo</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
