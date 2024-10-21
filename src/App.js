import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  
  const { username, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
    // Here you can add code to send data to the backend.
    // For example, using fetch or axios to POST data to a server.
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={changeHandler}/><br/>
        <label>password</label>
        <input type='password' name='password' value={password} onChange={changeHandler}/><br/>
        <input type='submit' name='submit' /><br/>
      </form>
    </div>
  );
}

export default App;