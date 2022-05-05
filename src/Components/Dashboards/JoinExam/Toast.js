import React,{useRef,useEffect} from 'react'
import gsap from "gsap";
export default function Toast({duration,data}) {
  const parent=useRef();
  useEffect(()=>{
    let len=parent.current.children.length;
    for(let i=0;i<len;i++){

       gsap.from(parent.current.children[i],{duration:duration*(i+1),opacity:0,x:-200,display:'flex'})

       setTimeout(()=>{
        gsap.to(parent.current.children[i],{duration:duration*(i+1),opacity:0,x:200,w:0,h:0,display:'none'} )

       },3000)
    }

  },[])
  
  return (
    <div className="toastContainer" ref={parent}>
        {

            data.map((item,index)=>{
                return <div key={index}  className="toast">
                    <p>{item}</p>
                    <small>12:30 am</small>
                </div>
            })

        }



    </div>

  )
}
