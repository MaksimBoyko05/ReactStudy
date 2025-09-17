import { useState } from "react";
import '../styles/UserStatusList.css'
const initialUsers = [
  { id: 1, name: "Макс", online: false },
  { id: 2, name: "Артем", online: true },
  { id: 3, name: "Іван", online: false },
];

function UserStatusList() {
  const [users, setUsers] = useState(initialUsers);

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, online: !user.online } : user
    ));
  };

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          className={user.online ? "online" : "offline"}
        >
          {user.name} - {user.online ? "Online" : "Offline"}
          <button onClick={() => toggleStatus(user.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  );
}

export default UserStatusList;
