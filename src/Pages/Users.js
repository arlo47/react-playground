import { 
  useEffect, 
  useState, 
  createContext
} from "react";
import { Link, Outlet } from 'react-router-dom';

export const UserContext = createContext();

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data);
          setIsLoading(true);
        }, (error) => {
          setError(error);
        })
  }, [])

  if (error) {
    return <h1>Error: {error.message}</h1>
  } else if (!isLoading) {
    return <h1>loading...</h1>
  } else {
    return (
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.email}
              </Link>
            </li>
          ))}
        </ul>
        <UserContext.Provider value={users}>
          <Outlet/>
        </UserContext.Provider>
      </div>
    );
  }
}

export default Users;