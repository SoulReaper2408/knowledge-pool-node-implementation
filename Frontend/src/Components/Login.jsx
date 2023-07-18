// Login.js
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success,setSuccess]=useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handlelogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/kp/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }

      );      
      navigate('/question-form');
      const data=await response.text();
        setSuccess(data);
        console.log(response);

      } catch (error) {
        // Handle signup error
        console.error(error);
        setError(true);
        setSuccess(await response.text());
      }
    };
  
      // Store the token in local storage or a cookie for future use
      /*localStorage.setItem('token', token);
      Cookies.set('token', token, { expires: 7 }); // 'expires' option sets the cookie to expire in 7 days
      // Handle the successful login response or redirect to another page*/
     
  return (
      <div className="login-container">
    <form className="login-form" onSubmit={handlelogin}>
      <h2>Login</h2>
      
      <input type="email" placeholder="abc@xyz.com" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
      </div>
  );
  // return (
  //   <div className="login-container">
  //     <form className="login-form" onSubmit={handlelogin} width="20px">
  //       <h2>Log In</h2>
        
  //       <div className="form-group">
  //         <input type="email" placeholder="Username" value={username} onChange={handleUsernameChange} />
  //         {error && error.includes('username') && <p className="error-message">Username is required</p>}
  //       </div>

  //       <div className="form-group">
  //         <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
  //         {error && error.includes('email') && <p className="error-message">Email is required</p>}
  //       </div>

  //       <div className="form-group">
  //         <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
  //         {error && error.includes('password') && <p className="error-message">Password is required</p>}
  //       </div>

  //       <div className="form-group">
  //         <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
  //         {error && error.includes('confirmPassword') && <p className="error-message">Confirm Password is required</p>}
  //       </div>

  //       <button type="submit">Sign up</button>
  //     </form>
      
  //     <br />
  //     {error && <p style={{ color: 'red' }}>{error}</p>}
  //     {!error && success && <p style={{ color: 'green' }}>{success}</p>}
  //   </div>
  // );
};


export default Login;
