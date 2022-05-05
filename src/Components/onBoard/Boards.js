import React,{useState,useRef,useEffect} from 'react'
import {gsap} from 'gsap';
import {useNavigate} from 'react-router-dom';
export default function Boards() {
    const navigate=useNavigate()
    const icons=useRef();
    const img=useRef();
    const dashboard=useRef();
    const [boards,setBoards]=useState([
        {imageUrl:"a.png",descName:"We ensure that honesty pay",showContinue:true},
        {imageUrl:"b.png",descName:"Customize your Assesments and needs",showContinue:true},
        {imageUrl:"c.png",descName:"Say no to false reports",showContinue:true},
        {imageUrl:"d.png",descName:"Protecting rights,respecting policy",showContinue:false},        
    ]);   
    const [index,setIndex]=useState(0);

    const changeImage=()=>{
      gsap.from(img.current,{duration:1,opacity:0.2,x:100});
      setIndex(index+1);

      if(index===boards.length-1){
        navigate("/home");
      }
   

    }
    useEffect(()=>{
      gsap.from(img.current,{duration:1,opacity:0.2,x:100});

    },[]);
    useEffect(()=>{


      if(index==boards.length-1){
        dashboard.current.textContent="Go to Dashboard "
      }
    },[index])



  return (
    <div className="boards"  >

        <div className="image" ref={img} >
          <div className="back"></div>
          <img src={"./Assets/"+boards[index].imageUrl}></img>
        </div>


        <p className="desc">
          {boards[index].descName}
        </p>


        <button onClick={()=>changeImage()} ref={dashboard}>Continue &gt;</button>
      
      
        <div className="icons" ref={icons}>
          {
            boards.map((item,id)=>{
              return <span className={id==index?"activeDot":"dot"}  key={id}></span>
            })
          }
        </div>



    </div>
  )
}
