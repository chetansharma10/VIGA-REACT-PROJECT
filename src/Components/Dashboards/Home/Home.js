import React, { useState } from 'react'
import Class from './Class';
import {useNavigate} from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate();
  const [user,setUser]=useState(
    {
  
      
      classes:[
        
        
        {
        username:"Smauel",
        userId:"1112122",
        subject:"Neural Networks and Fuzzy Control",
        courseCode:"CSE425",
        id:1,
        exams:[
          
          {
          examName:"CAT1",
          date:"22 Dec 2020",
          startTime:"9:00am",
          endTime:"12:00pm",
          testCompleted:false,
          testLink:"https://www.vigaEnter.com//Test1se1",
          },

          {
            examName:"CAT2",
            date:"23 Dec 2020",
            startTime:"9:00am",
            endTime:"12:00pm",
            testCompleted:true,
            testLink:"https://www.vigaEnter.com//Test1se1",
          }

        ]

       },




       {
        username:"Smauel",
        userId:"1112122",
        subject:"Neural Networks and Fuzzy Control",
        courseCode:"CSE425",
        id:2,
        exams:[
          
          {
          examName:"CAT1",
          date:"22 Dec 2020",
          startTime:"9:00am",
          endTime:"12:00pm",
          testCompleted:false,
          testLink:"https://www.vigaEnter.com//Test1se1",
          },

          {
            examName:"CAT2",
            date:"23 Dec 2020",
            startTime:"9:00am",
            endTime:"12:00pm",
            testCompleted:true,
            testLink:"https://www.vigaEnter.com//Test1se1",
          }

        ]

       }
    ]
      

    },

  
  );



  

  return (
    <div className="homeContainer">
      <h1>My Classes</h1>
      <div className="classContainer">

      {
        user.classes.map((item,index)=>{

          return <Class key={index} data={item}>
          </Class>
            
        })
      }
      <div className="foot">
        <a href="">Take a demo Exam</a>
        <div className="footItem">
          <div className="textContent">
            <p>Samuel Doe</p>
            <p>18282012</p>
          </div>
          <img onClick={()=>navigate("/settings")} src="/Assets/user.png"></img>
        </div>
      </div>
      </div>


   


    </div>
  )
}
