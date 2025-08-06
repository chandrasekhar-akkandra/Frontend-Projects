

export default function GameBoard({selectSquare, Board }){
    
return ( <ol id="game-board">

{Board.map((row,rowIndex)=>
<li key={rowIndex}>
  <ol>
    {row.map((playerSymbol,index)=><li key={index}>
        <button onClick={()=>selectSquare(rowIndex,index)} disabled={playerSymbol!==null}>{playerSymbol}</button>
        </li>)}
    
    </ol>
    </li> )}



</ol>
);

};