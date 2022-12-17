import "./comp.css"

import React from "react"
import { Cards } from "./cards"
export const Banner=()=>{
return(
    <>
    <div className="banner container">




<div className="left_component">

<h1 id="title">
    GOD OF WAR <span>&nbsp;5</span>
</h1>
<h2>
   <span>Trending &nbsp;</span> |&nbsp; Released on 20/10/2022
</h2>
<p> Based on ancient mythologies, the story follows Kratos, a Spartan warrior and later the Greek God of War, who was tricked into killing his family by his former master, the original Greek God of War Ares. This sets off a series of events that leads to wars with the different mythological pantheons. The Greek-based games see Kratos follow a path of vengeance due to the machinations of the Olympian gods, while the Norse-based games, which introduce his son Atreus as a secondary protagonist, show Kratos on a path of redemption and inadvertently coming into conflict with the Norse gods.</p>
<button id="preview_btn">Prview</button>
</div>



<div className="right_component">

<Cards/>
<Cards/>




</div>








    <div class="banner_fadeBottom"></div>

    </div>
    </>
)
}