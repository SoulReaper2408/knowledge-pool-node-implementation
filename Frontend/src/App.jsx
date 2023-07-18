import React from 'react';
// import NavBar from './NavBar';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import Login2 from './Components/Login2.jsx';

import QuestionForm from './Components/QuestionForm.jsx';
import QuestionList from './Components/QuestionList.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/login2" element ={<Login2/>} />
        <Route path="/question-form" element={<QuestionForm/>} />
        <Route path="/question-list" element={<QuestionList/>} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;