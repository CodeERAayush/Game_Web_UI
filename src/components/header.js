import "./comp.css"

import React from "react"
export const Header=()=>{
return(
    <>
    <header className="header container" id="header">
<div className="Title">
        <img className="mainIcon" src="./images/site_icon.png" />
        <h1 className="mainTitle">Gamophobic</h1>
        </div>
        <ul className="navBar">
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact Us!</li>
        </ul>
    </header>
    </>
)
}