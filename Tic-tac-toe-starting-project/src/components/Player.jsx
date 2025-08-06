import { useState } from "react";

export default function Player( {name,symbol,isActive,onNameChange}  ){
  let [initialName,editedName] = useState(name);
  let [edit,setEdit]=useState(false);
  let status="Edit";
  function editName(){
  setEdit((editing)=>!editing);
  if(edit){
  onNameChange(symbol,initialName);
  }
  }
  function changeName(event){
   editedName(event.target.value);
  }
  let playerName= <span className="player-name">{initialName}</span>
  if(edit){
  playerName=<input type="text" required  value={initialName} onChange={changeName}></input>
  status="Save";
  }
    return(
        <li className={isActive?'active':undefined}>
        <span className="player">
      {playerName}
        <span classNam="player-symbol">{symbol}</span>
        </span>
        <button onClick={editName}>{status}</button>
      </li>
    );


}