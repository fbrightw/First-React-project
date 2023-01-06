import React, {useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import ModalPanel from "../../../../utils/ModalPanel";

export default function Task(props) {

  const [isPlusClicked, onIsPlusClicked] = useState(false);

  function removeTask(){
    props.removeTask(props.id);
  }

  function onCheckboxClick(e) {
    console.log("onCLick yuj", e)
  }

  function onTextChanging(e) {
    console.log("text", e)
  }

  function onPlusClick() {
    onIsPlusClicked(!isPlusClicked);
  }

  return (
      <div className="task-container">
        <input type="checkbox" className="larger" onClick={onCheckboxClick}/>
        <div className="task-text" onChange={onTextChanging}>{props.text}</div>
        <StyledIcons className="bi bi-plus-lg" onClick={onPlusClick}/>
        <div className="border"></div>
        <StyledIcons className="bi bi-x-lg" onClick={removeTask}/>
      </div>
  )
}
