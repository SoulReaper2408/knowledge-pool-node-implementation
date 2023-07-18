import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlelogin = async (event) => {
    event.preventDefault();


      const response = await fetch('http://localhost:5000/kp/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if(response.ok)
      {
        setSuccess("Logged in Successfully");
        const data=await response.text();
        localStorage.setItem("token",data);
        console.log(`Bearer ${data}`);
        navigate('/question-form');

      }
      else
      {
        setError(true);
        setSuccess(await response.text());
      }
    }
        
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handlelogin}>
        <h2>Log In</h2>

        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
         
        </div>

        <button type="submit">Login</button>
      </form>

      <br />
      {error && <p className='error-message'>{success}</p>}
      {!error && <p className='success-message'>{success}</p>}
    </div>
  );

  }
export default Login;