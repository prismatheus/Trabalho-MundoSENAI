import React from "react";
import './Title.css'
function Title({ onClick }) {
    return (
        <div onClick={onClick} className="title-container">
            <h1 id="Title">TaskManager 3000</h1>
            <p id="subTitle">Welcome to the task app!</p>
        </div>
    )
}

export default Title