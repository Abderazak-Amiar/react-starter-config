import { useEffect, useState } from 'react';
import './App.css';
import { appPropTypes } from './App.types';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('==>DATA', data);
        setUsers(data);
      });
  }, []);
  return (
    <>
      <h1>Azul</h1>
      <h3>Azul</h3>
      {users.map((user: appPropTypes) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
