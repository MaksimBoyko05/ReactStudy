import { createContext, useState } from "react";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
  const users = [
    { id: 1, name: "Max", status: "online", isEditing: false },
    { id: 2, name: "Bob", status: "offline", isEditing: false },
    { id: 3, name: "Ivan", status: "online", isEditing: false },
  ];
  const [usersList, setUsers] = useState(users);
  const toggleStatus = (id) => {
    setUsers(
      usersList.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "online" ? "offline" : "online" }
          : user
      )
    );
  };

  const addUser = (name, status) => {
    const newUser = { id: Date.now(), name, status: status.toLowerCase() };
    setUsers([...usersList, newUser]);
  };
const editUser = (id, newName, newStatus) => {
  setUsers(usersList.map(u => 
    u.id === id ? {...u, name: newName, status: newStatus} : u
  ));
};


  return (
  <AppContext.Provider value={{ users, usersList, toggleStatus, addUser, editUser }}>
    {children}
  </AppContext.Provider>
  );
}