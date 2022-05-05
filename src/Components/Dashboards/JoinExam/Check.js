import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
export default function JoinExam() {
  const location=useLocation();
  const navigate=useNavigate();
  return (
    <div className="mainCheck">

      <div className="checkHeader">
        <div className="left">
          <object data="/Assets/back.svg"></object>
          <h2>Graduate Record Examination</h2>
        </div>
       <div className="right">
         <h4>17th Dec 2020</h4>
         <small>9:00 - 12:00</small>
       </div>
      </div>


      <div className="contentArea">
        <div className="leftContent">
          <img src="/Assets/user.png"></img>
        </div>
        <div className="rightContent">

              <div className="verified">

                    <div className='records'>
                      <object data="/Assets/right.svg"></object>
                      <p>Webcam Checked</p>
                    </div>

                    <div className='records'>
                      <object data="/Assets/right.svg"></object>
                      <p>Mic Testing</p>
                    </div>

                    <div className='records'>
                      <object data="/Assets/wrong.svg"></object>
                      <p>Iris Sync</p>
                    </div>

                    <div className='records'>
                      <object data="/Assets/load.svg"></object>
                      <p>Alian Hardware Detectio Checked</p>
                    </div>

                    <div className='records'>
                      <object data="/Assets/load.svg"></object>
                      <p>Browser Lock</p>
                    </div>


                    <div className='records'>
                      <object data="/Assets/load.svg"></object>
                      <p>Browser Lock</p>
                    </div>


              


                    <div className='records'>
                      <object data="/Assets/load.svg"></object>
                      <p>Browser Lock</p>
                    </div>

                    <div className='records'>
                      <object data="/Assets/right.svg"></object>
                      <p>Screen Capture</p>
                    </div>
                    <button className="startExam" onClick={()=>navigate("/exam")}>Start Exam</button>
              </div>

          </div>
        


      </div>


      <div className="foot">
        <div className="footItem">
          <div className="textContent">
            <p>Samuel Doe</p>
            <p>18282012</p>
          </div>
          <img src="/Assets/user.png"></img>
        </div>
      </div>
    </div>
  )
}
