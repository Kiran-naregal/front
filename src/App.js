// import './App.css';
// import logo from './logo.svg';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/navbar.components";
import Home from "./components/home.components";  
import Approve from './components/approval.components';
import Display from './components/printApproved.component';
import CourseList from'./components/course.components';
import CourseForm from './components/courseForm.components';
import MakeUPForm from './components/makeUpForm.component';
import MakeApproval from './components/makeUpApproval.component';
import MakePrint from './components/makePrint.component';

function App() {

  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>} />
          <Route path='/update' exact element={<Approve />}/>
          <Route path='/Print' exact element={<Display />} />
          <Route path='/list' exact element={<CourseList />} />
          <Route path='/courseForm' exact element={<CourseForm />} />
          <Route path='/makeForm' exact element={<MakeUPForm />} />
          <Route path='/makeApporval' exact element={<MakeApproval />} />
          <Route path='/makePrint' exact element={<MakePrint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
