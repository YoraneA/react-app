import axios from 'axios';
import {useEffect, useState} from "react";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {error ?? <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
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