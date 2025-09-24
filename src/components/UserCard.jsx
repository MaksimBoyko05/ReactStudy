import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/UserCard.css";
function UserCard({users, toggleStatus}) {
 const { id } = useParams(); // бере id з URL
  const user = users.find((u) => u.id === Number(id));

    if (!user) {
    return <p>Користувача не знайдено</p>;
  }
  
  return (
   <div>
      <h2>{user.name}</h2>
      <p>Статус: {user.status === "online" ? "🟢 Онлайн" : "🔴 Офлайн"}</p>
      <button
      onClick={() => {toggleStatus(user.id)
      }}
      >
        Змінити статус</button>
      <Link to="/users">Назад до списку</Link>
    </div>
  );
}
export default UserCard;
