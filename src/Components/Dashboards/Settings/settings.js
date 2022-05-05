import React from 'react'

export default function settings() {
  return (
    <div className="settingsBox">
        <div className="headSett">
            <div className="headLeft">
               <object data="/Assets/back.svg"></object>
               <img src="/Assets/user.png"></img>
               <h3>Samuel Doe</h3>
               <h4>11929102</h4> 
            </div>
            <p>
                <object data="/Assets/write.svg"></object>
                Edit profile picture
            </p>
        </div>

        <div className="mainSett">
           <h4>General Settings</h4>
           <div className="mainCont">
               <div className="itemSett">
                   <h4>Setting 1</h4>
                   <object data="/Assets/down.svg"></object>
               </div>
               <hr></hr>


               <div className="itemSett">
                   <h3>Setting 2</h3>
                   <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                   </label>
               </div>
               <hr></hr>


               <div className="itemSett">
                   <h3>Setting 3</h3>
                   <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                   </label>
               </div>
           </div> 



           
           <h4>General Settings</h4>
           <div className="mainCont">
               <div className="itemSett">
                   <h4>Setting 1</h4>
                   <a href="">View More</a>
               </div>
               <hr></hr>


               <div className="itemSett">
                   <h3>Setting 2</h3>
                   <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                   </label>
               </div>


              
           </div> 

        </div>
    </div>
  )
}
