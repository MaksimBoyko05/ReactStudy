import { useState, useEffect } from "react";
import '../styles/UserListAPI.css'
function UserListAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="usersWrap">
      {loading ? (
        <div>Завантаження...</div>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id} className="userCards">
             <p> {user.name} </p>
             <p> {user.email} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default UserListAPI;
