import { useState } from "react";
import "../styles/UserCard.css";
function UserCard({ name, age}) {
  const [isKyiv, setIsKyiv] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  
  return (
    <div>
      <h2>{name}</h2>
      <p>Вік: {age}</p>
      <p className={isKyiv ? "city kyiv" : "city kherson"}>
        {isKyiv ? "Kyiv" : "Kherson"}
      </p>
      <button onClick={() => setIsKyiv(!isKyiv)}>Перемкнути місто</button>
      <p>
        Status: 
        <span className={isOnline ? "status online" : "status offline"}>{isOnline ? "Online" : "Offline"}</span>

        </p>
      <button 
        onClick={() => setIsOnline(!isOnline)}
      >SetStatus</button>
    </div>
  );
}
export default UserCard;
