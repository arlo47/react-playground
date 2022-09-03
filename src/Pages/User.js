import { UserContext } from '../Pages/Users'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
  const params = useParams();
  const userId = Number(params.userId);
  const users = useContext(UserContext);
  const user = users.find(user => user.id === userId);

  return (
    <div>
      <h1>User</h1>
      <p>{user.name}</p>
    </div>
    
  );
}

export default User;