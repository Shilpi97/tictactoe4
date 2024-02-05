import React from "react";
import './Game.css';
const Header = ({gameState,currentPlayer})=>{
    return (<div className="headerBox">

    <div className="headertext">{gameState===3?`Game is Draw`:`Player ${currentPlayer}  ${gameState===2?'win':'turn'}`}</div>
    </div>)
}

export default Header;