import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddUserForm from "./AddUserForm";
import UserListAPI from "./UserListAPI";
import Clock from "./Clock"

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserList() {
  const { users, onAddUser, onEditUser } = useContext(AppContext);

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState("online");

  const startEdit = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
    setEditStatus(user.status);
  };

  const saveEdit = (id) => {
    onEditUser(id, editName, editStatus);
    setEditingId(null);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {editingId === u.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <button onClick={() => saveEdit(u.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <Link to={`/user-card/${u.id}`}>{u.name}</Link>
                <span> ({u.status}) </span>
                <button onClick={() => startEdit(u)}>Редагувати</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <AddUserForm onAddUser={onAddUser} />
      <UserListAPI/>
      <Clock/>
    </div>
  );
}

export default UserList;
