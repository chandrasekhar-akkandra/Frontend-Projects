
import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

let initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
function App() {
  const [gameTurns, setGameTurns]=useState([]);
  let [activePlayer,setActivePlayer]=useState('X');
  const [Players,setPlayers]=useState({
    "X": 'Player 1',
    "O": 'Player 2',
  });

  let gameBoard=[...initialGameBoard.map((array)=>[...array])];
  let winner=null;
     for(const turn of gameTurns){
        const {square,player}=turn;
        const {row, col}=square;
        gameBoard[row][col]=player;
     }
     for(const combination of WINNING_COMBINATIONS){
      const firstSquare=gameBoard[combination[0].row][combination[0].column]
      const secondSquare=gameBoard[combination[1].row][combination[1].column]
      const thirdSquare=gameBoard[combination[2].row][combination[2].column]

      if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare)
      {winner=Players[firstSquare]};
     }

     const hasDraw=gameTurns.length===9 && !winner;
   function handleActivePlayer(rowIndex,index){
   setActivePlayer((curentPlayer)=>(curentPlayer==='X'?'O':'X'));
   setGameTurns((prevTurns)=>{
    let currentPlayer='X';
   if (prevTurns.length>0 && prevTurns[0].player==='X'){
     currentPlayer= 'O';
   }
    const updatedTurns=[
      { square : {row : rowIndex , col : index}, player : currentPlayer }, ...prevTurns,
    ];
    return updatedTurns;
   });

  }
  function handleRestart(){
    setGameTurns([]);
    setActivePlayer('X');
  }
  function handlePlayerNames(symbol,newName){

    setPlayers((prevPlayers)=>{
      return{

        ...prevPlayers,
        [symbol]: newName,
      };
    })
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} onNameChange={handlePlayerNames}/>
        <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} onNameChange={handlePlayerNames}/>
      </ol>
     { (winner || hasDraw) && (<GameOver winner={winner} onRestart={handleRestart}/>)}
      <GameBoard selectSquare={handleActivePlayer} Board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
   </main>
  );
}

export default App
