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

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      {error ?? <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name}
            <button
              className="btn btn-outline-danger mx-3"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
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