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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </React.Fragment>
  );
}

export default App;
