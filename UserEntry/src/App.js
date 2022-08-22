import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from '../src/components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = userData => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    })
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
