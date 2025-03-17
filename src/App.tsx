import {useEffect, useState} from "react";
import userService, {User} from "./services/user-service.ts";
import {CanceledError} from "./services/api-client.ts";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const {request, cancel} = userService.getAllUsers();

    request
      .then(response => setUsers(response.data))
      .catch(error => {
        if (err instanceof CanceledError) return;
        setError(error.message)
      })
      .finally(() => setLoading(false));

    return () => cancel();
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
