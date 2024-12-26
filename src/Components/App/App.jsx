import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '../../assets/user.png'
import styles from './App.module.css'
const App = () => {
  return (
    <Router>
      <div className="container mt-5">
      <div className={styles.container}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={image} alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
};

export default App;
