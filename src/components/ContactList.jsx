import { useState } from "react";
 



function ContactList(){

 const [contacts, setContacts] = useState([
  { id: 1, name: "Макс", calls: 0 },
  { id: 2, name: "Іван", calls: 0 }
]);

  const increaseCalls = (id) => {
   setContacts(
  contacts.map(contact =>
    contact.id === id
      ? { ...contact, calls: contact.calls + 1 } 
      :  contact
  )
);
  };
  const decreaseCalls = (id) => {
   setContacts(
  contacts.map(contact =>
    contact.id === id && contact.calls > 0
      ? { ...contact, calls: contact.calls - 1 } 
      :  contact
  )
);
  };
    return (
            <div>
                <ul>
                    {contacts.map((user) =>(
                        <li key={user.id}>{user.name}, {user.calls}
                        <button
                        onClick={() => increaseCalls(user.id)}
                        >+1</button>
                        <button
                        onClick={() => decreaseCalls(user.id)}
                        disabled={
                            (user.calls < 1)
                        }
                        >-1</button>
                        </li>
                    )
                )}
                </ul>
            </div>
    );
}
export default ContactList;