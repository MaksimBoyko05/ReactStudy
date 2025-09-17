import { useState } from "react";
function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Макс" },
    { id: 2, name: "Артем" },
    { id: 3, name: "Іван" },
  ]);

  const removeFirst = () => {
    setUsers(users.slice(1)); // видаляємо першого
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input type="text" defaultValue={user.name} />
          </li>
        ))}
      </ul>
      <button onClick={removeFirst}>Видалити першого</button>
    </div>
  );
}

export default UserList;