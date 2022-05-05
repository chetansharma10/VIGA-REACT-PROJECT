import React from 'react'

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <h3>Proctor Vision</h3>
      </div>
      <div className="search">
        <object data="/Assets/search.svg"></object>
        <input type="text" placeholder='Search'></input>
      </div>
      <div className="btns">
        <button className="min">
          <object data="/Assets/min.svg"></object>
        </button>
        <button className="max">
          <object data="/Assets/max.svg"></object>
        </button>
        <button className="cross">
          <object data="/Assets/close.svg"></object>
        </button>
      </div>
    </div>
  )
}
