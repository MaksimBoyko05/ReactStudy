import {useEffect, useMemo, useState} from "react";

export default function UserProfile() {
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("")
  const users = {id: 1, name: "Max", role: "admin"}

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        setUser(data[0]);
      } catch (err) {
        console.error("Error fetching user", err)
        setErrorMessage(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser();
  }, []);

  // const adminUsers = useMemo(() => {
  //   return   users.filter(user => user.role === "admin")
  // }, [users])




  if (errorMessage) return <div>Error: {errorMessage}</div>
  return (
    <>
      <div>
        {!isLoading ? (
          <ul>
            <li key={user.id}>
              {user.name}
            </li>
          </ul>
        ) : (
          <h3>Завантаження</h3>
        )}
      </div>
    </>
  )
}