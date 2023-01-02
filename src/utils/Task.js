import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Task(props) {

  const [isClicked, onIsClicked] = useState(false);

  function removeTask(){
    props.removeTask(props.id);
  }

  function onCheckboxClick(e) {
    console.log("onCLick yuj", e)
  }

  function onTextChanging(e) {
    console.log("text", e)
  }

  return (
      <div className="task-container">
        <input type="checkbox" className="larger" onClick={onCheckboxClick}/>
        <div className="task-text" onChange={onTextChanging}>{props.text}</div>
        <div className="close" onClick={removeTask}>
          <CloseIcon fontSize="small"/>
        </div>
      </div>
  )
}
