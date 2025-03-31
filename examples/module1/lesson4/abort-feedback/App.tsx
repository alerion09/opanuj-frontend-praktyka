import { useEffect, useState } from 'react';
import { getUsers } from './actions/get-users.ts';
import { User } from './types/user.ts';

const App = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [error, setError] = useState(false);

  const assignUsers = async () => {
    setError(false);
    let users = null;
    try {
      users = await getUsers();
    } catch (error) {
      setError(true);
    }
    setUsers(users);
  };

  useEffect(() => {
    (async () => {
      await assignUsers();
    })();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {error && (
          <div className="flex flex-row items-center">
            <p className="mr-2">Sorry, there seems to be connectivity issues...</p>
            <button
              onClick={assignUsers}
              className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            >
              Try again
            </button>
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {users?.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
