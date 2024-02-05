import React from "react";
import './Game.css';

const GameCircle =({id,children,className,onCircleClicked})=>{
 
return(
    <div className={`gameCircleContainer ${className}`} onClick={()=>onCircleClicked(id)}> </div>
)
}
export default GameCircle;