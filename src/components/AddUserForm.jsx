import { useState } from "react";

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Online")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser(name, status);
      setName("");
      setStatus("Online")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введіть ім'я"
      />
      <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      >
        <option value={"Online"}>Online</option>
        <option value={"Offline"}>Offline</option>
      </select>
      <button type="submit">Додати</button>
    </form>
  );
}

export default AddUserForm;
