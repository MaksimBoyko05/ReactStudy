import { Link } from "react-router-dom";
function UserList({users}) {

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
             <Link to={`/user-card/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;