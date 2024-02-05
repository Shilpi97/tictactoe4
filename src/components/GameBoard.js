import React, {useState} from "react";
import Footer from "./Footer";
import './Game.css';
import GameCircle from './GameCircle';
import Header from "./Header";
import { isWinner, isDraw } from "./helper";
const totalCircles = 16;
const noPlayer=0;
const player1 = 1;
const player2 =2;

const GAME_STATE_IDLE=0;
const GAME_STATE_PLAY=1;
const GAME_STATE_WIN=2;
const GAME_STATE_DRAW=3;
const GameBoard = ()=>{
    const [gameBoard,setGameBoard]= useState(Array(16).fill(noPlayer));
    const [currentPlayer,setCurrentPlayer]=useState(player1);
    const [gameState,setGameState]=useState(GAME_STATE_PLAY);
    const initBoard=()=>{
        const circles=[];
        for(let i=0;i<totalCircles;i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const circleClicked=(id)=>{
        console.log("shilpi id click thayu",id);
        
        // const board=[...gameBoard];
        // board[id]=currentPlayer;
        // setGameBoard(board);

        if(gameBoard[id]!==noPlayer) return;
        if(gameState!==GAME_STATE_PLAY) return;
        if(isDraw(gameBoard,id,currentPlayer)){
            setGameState(GAME_STATE_DRAW);

            console.log("game is Draw");
        }
        if(isWinner(gameBoard,id,currentPlayer)){
            setGameState(GAME_STATE_WIN);

            console.log("winner is player",currentPlayer);
        }
        else{
            setCurrentPlayer(currentPlayer===player1?player2:player1);
        }
        setGameBoard(prev=>{
            return prev.map((circle,pos)=>{
            if(pos==id){
                return currentPlayer;
            }
            return circle;
        }
            )
        });
        
        
    }
    console.log({gameBoard});
    const renderCircle= id =>{
        return <GameCircle id={id} key={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked}/>
    }
    return(
        <>
        <Header gameState={gameState} currentPlayer={currentPlayer}/>
        <div className="boardContainer">
        {initBoard()}
        
        </div>
        <Footer/>
        </>
    );
}
export default GameBoard;