import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [success,setSuccess]=useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/kp/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,email, password}),
      });
     
        const data=await response.text();
        setSuccess(data);
        console.log(response);
      } catch (error) {
        // Handle signup error
        console.error(error);
        setError(await response.text());
      }
    };
  
      
   return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup} width="20px">
        <h2>Don't have an account? Sign up!</h2>
        
        <div className="form-group">
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          {error && error.includes('username') && <p className="error-message">Username is required</p>}
        </div>

        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          {error && error.includes('email') && <p className="error-message">Email is required</p>}
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          {error && error.includes('password') && <p className="error-message">Password is required</p>}
        </div>

        <div className="form-group">
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {error && error.includes('confirmPassword') && <p className="error-message">Confirm Password is required</p>}
        </div>

        <button type="submit">Sign up</button>
      </form>
      
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Signup;