import React from 'react'
import { useDispatch } from 'react-redux';
import { SignInAdmin } from '../../action/auth.action';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(SignInAdmin({ email, password }));
  }
  return (
    <div>
      <h1>Admin Login</h1>
      <form action="">
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
