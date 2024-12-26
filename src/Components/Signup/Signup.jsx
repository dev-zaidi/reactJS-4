import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './Signup.module.css'
import Button from '../Button/Button';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    swal('Wohoo!',`Account created using ${email}`,'success')
  };

  return (
    <div className={styles.form}>
      <br />
      <h2 className="text-center">Sign Up</h2>
      <br />
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>
        <Button text='Create Account'/>
      </form>
      <div className="text-center mt-3">
        Already have an account?{' '}
        <button className='btn btn-link' onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
