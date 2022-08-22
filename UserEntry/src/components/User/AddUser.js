import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault(); //Inorder to prevent the page from reloading when form is submitted
    console.log( enteredUserName ,enteredAge)
  };

  const userNameChangeHandler = event => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
