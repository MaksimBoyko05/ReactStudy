import {useEffect, useState} from "react";

export default function UserProfile(){
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://jsonplac55eholder.typicode.com/users')
        const data = await res.json();
        setUser(data[0]);
      }catch (err){
        console.error("Error fetching user", err)
        setErrorMessage(err.message)
      }finally {
        setIsLoading(false)
      }
    }
    fetchUser();
  }, []);

  if(errorMessage) return <div>Error: {errorMessage}</div>
  return(
    <>
      <div>
        {!isLoading ? (
          <ul>
            <li key={user.id}>
              {user.name}
            </li>
          </ul>
        ):(
          <h3>Завантаження</h3>
        )}
      </div>
    </>
  )
}