import axios from 'axios';
import {useEffect, useState} from "react";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
      {error ?? <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </>
  )
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}