import React,{ useState} from 'react'
import {useNavigate} from 'react-router-dom';
export default function Class(props) {
  const navigate=useNavigate();
  const [toggle,setToggle]=useState(false);
  const hide={
    display:"none",
  }
  const show={
    display:"flex",
  }
  const doTask=(e)=>{
    navigate("/check",{state:props.data});
    
  }
 
  const createHideShow=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="parentItem">
      <div className="classItem"  onClick={()=>createHideShow()} >
        <div className="details">
          <h4>{props.data.subject}</h4>
          <p>{props.data.courseCode}</p>
        </div>
        <object data="/Assets/down.svg"></object>
      </div>



      <div className="itemDetails" style={toggle?show:hide}>
        {
          props.data.exams.map((item,index)=>{
            return <div key={index} className="itemsSub"  >
              <p>{item.examName}</p>
              <p>
                {item.date}&nbsp;&minus;&nbsp;
                {item.startTime}&nbsp;&minus;&nbsp;
                {item.endTime}&nbsp;
              </p>
              
              <button className="examBtn"
               onClick={(e)=>doTask(e.target)} 
               id={!item.testCompleted?item.testLink:undefined}
               disabled={item.testCompleted?true:false} 
               style={item.testCompleted?{backgroundColor:"lightgray"}:{backgroundColor:"white"}}
               >
                {item.testCompleted?"Completed":"Join the Exam"}
              </button>
            </div>
          })
        }
      </div>
    </div>
  )
}
