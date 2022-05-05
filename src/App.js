import React from 'react'

import {Routes,Route} from 'react-router-dom';

import Splash from './Components/Splash';
import Login from './Components/Auth/Login';
import NavBar from './Components/Others/NavBar';
import Footer from './Components/Others/Footer';
import Boards from './Components/onBoard/Boards';
import Home from './Components/Dashboards/Home/Home';
import Check from './Components/Dashboards/JoinExam/Check';
import Exam from './Components/Dashboards/JoinExam/Exam';

import Settings from './Components/Dashboards/Settings/settings';




export default function App() {

  return (
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Splash/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Boards" element={<Boards/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/check" element={<Check/>}></Route>
          <Route path="/exam" element={<Exam/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>

        </Routes>
        <Footer/>
      </div>

  )
}
