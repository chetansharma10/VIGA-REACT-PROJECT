import React,{useEffect,useState,useRef} from 'react'
import Question from './Question';
import axios from 'axios';
import Toast from './Toast';

export default function Exam() {

  const [index,setIndex]=useState(0);
  const [ques,setQues]=useState([]);
  const no_items_per_page=16;
  const [isLoaded,setLoaded]=useState(false);
  const [m,setM]=useState(0);
  const [n,setN]=useState(no_items_per_page);
  const [arr,setArr]=useState([]);
  const [currPage,setCurrPage]=useState(1);

  const selectedQuestion={
    backgroundColor:"white",
    color:"black"
  }

  const notSelectedQuestion={
    backgroundColor:"#232527",
    color:"white"
  }

  const nextQuestion=()=>{
    if(index<(ques.length-1)){

      setIndex(index+1)
  

    }
    else{
      setIndex(index)
    }
  }

  const previousQuestion=()=>{
    if(index<=0){
      setIndex(0)
    }
    else{
      setIndex(index-1)

    }
  }


  const selectQuestion=(index)=>{
    setIndex(index)

  }

  const setPageNow=(x)=>{
    console.log(x)
    setCurrPage(x+1)
    const m1=(x+1)*no_items_per_page;
    const m2=m1-no_items_per_page;
    setM(m2)
    setN(m1)

  }

  



  useEffect(()=>{
    if(index>=n){
      setM(index)
      setN(n+16)
    }
    else{
      if(index<m){
        setM(m-no_items_per_page)
        setN(index+1)
      }
    }
  
   
  },[index])

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setQues(res.data)

      const no_of_pages=Math.ceil(res.data.length/no_items_per_page);
      setArr(Array(no_of_pages).fill(0))
    
    })
    .then(()=>{
      setLoaded(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


 

  const nextPage=()=>{
  


  }

  const backPage=()=>{

  }







  return (

    <div className="examContainer">

      {/* Exam Navbar */}
      <div className="examHeader">
        <div className="timer">
          <object data="/Assets/time.svg"></object>
          <p>01:33:33</p>
        </div>

        <div className="btnsHead">
          <button className="exit">Exit</button>
          <button className="save">Submit</button>
        </div>

      </div>




      <div className="examMain">
        <div className="examLeft">
          <Question data={ques[index]===undefined?"Wait...":ques[index]}  />
        </div>

        <div className="examRight">
          <div className="questions">
            <div className="topQuestions">
              { 
                ques.length>0?
                ques.slice(m,n).map((item,ind)=>{
                  return <button key={item.id} onClick={()=>selectQuestion(item.id-1)}  style={(item.id-1)==index?selectedQuestion:notSelectedQuestion} >{item.id}</button>
                })
                :
                "Loading..."
              }
            </div>
            <div className="pages">
                    <button onClick={()=>backPage()}>
                      <object data="/Assets/backPage.svg"  ></object>
                    </button>
                      {
                        isLoaded?
                        arr.map((item,x)=>{
                          return <button key={x} onClick={()=>setPageNow(x)}>{x+1}</button>
                        })
                        :
                        "Loaded"
                      }
                      <button onClick={()=>nextPage()}>
                        <object data="/Assets/nextPage.svg"  ></object>
                      </button>
                  
              
            </div>
            
          </div>

          <div className="npBtns">
            <button onClick={()=>previousQuestion()}>Previous</button>
            <button onClick={()=>nextQuestion()}>Next</button>
          </div>
        </div>

      </div>
            
      <Toast duration={1} data={["One Minute Please","Two Minute Please...","Oops"]}   />

    </div>
  )
}
