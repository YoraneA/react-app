import axios from 'axios';
import {useEffect, useState} from "react";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.phone}
        </li>
      ))}
    </ul>
  )
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}