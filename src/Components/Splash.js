import React,{useRef,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { gsap } from "gsap";


export default function Splash() {
  const splashScreen=useRef();
  useEffect(() => {
    gsap.from(splashScreen.current,{x:200,opacity:0,duration:0.5})
  }, []);
  return (
    <div className="splashContainer" ref={splashScreen}>
        <div className="logoPic">
          <object data="/Assets/logoPic.svg"></object>
        </div>
        <h1>
          Welcome abroad<br></br> to the future in the making <br></br>you've just become a part of it
        </h1>
        <Link to="/login" className="continueBtn">Continue &nbsp; &gt; </Link>
    </div>
  )
}
