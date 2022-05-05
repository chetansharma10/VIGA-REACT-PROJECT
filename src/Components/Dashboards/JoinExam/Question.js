import React from 'react'

export default function Question(props) {
 
  return (
    <div className="queBox">
      <h4>Question {props.data.id}</h4>
      <div className="queContent">
        <p >
          {props.data.body}
        </p>
        <img src="/Assets/Rectangle.png"></img>
      </div>
      <div className="options">
     
        <div className="optionItem">        
          <input id="que1" type="radio" name="ques"  >
          </input>
          &nbsp;
          <label htmlFor="que1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </label>
        </div>

        <div className="optionItem">        
          <input id="que2" type="radio" name="ques"  >
          </input>
          &nbsp;
          <label htmlFor="que2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </label>
        </div>


        <div className="optionItem">        
          <input id="que3" type="radio" name="ques"  >
          </input>
          &nbsp;
          <label htmlFor="que3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </label>
        </div>


        <div className="optionItem">        
          <input id="que4" type="radio" name="ques"  >
          </input>
          &nbsp;
          <label htmlFor="que4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </label>
        </div>

        


      </div>
      
    </div>
  )
}
