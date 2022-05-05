import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap';
import {  useNavigate } from 'react-router-dom';
export default function Login() {
  const loginScreen=useRef();
  const navigate=useNavigate();
  useEffect(()=>{
    gsap.from(loginScreen.current,{x:200,duration:0.5})
  },[]);

  const validate=()=>{
    // Here Check or Validate Account Details
    navigate("/Boards")
  }
  return (
    <div className="loginBox" ref={loginScreen}>
      <div className="logoPic2">
        <object data="/Assets/logoPic2.svg"></object>
      </div>
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>      
      
      <a href="/">Reset Password From Default/<br></br>Forgot Password</a>
      <button className="loginBtn" onClick={()=>validate()}>Log In</button>
    </div>
  )
}
