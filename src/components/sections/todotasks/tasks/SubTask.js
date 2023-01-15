import React, {useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import {defaultObj} from "./Task";

function SubTask(props) {

  const [isChecked, onIsChecked] = useState(false);
  const [subtaskObj, setSubtaskObj] = useState(props.task)

  function onCheckboxClick() {
    onIsChecked(!isChecked);
  }

  function onSubTaskTextChanging(e) {
    // subTasksArray.find()
    setSubtaskObj(prev => ({
      ...prev,
      text: e.target.value
    }))
  }

  return (
      <div className="subtask-container">
        <input type="checkbox" onClick={onCheckboxClick}/>
        <input type="text" className="task-text" onChange={onSubTaskTextChanging}/>
        <div className="border"></div>
        <StyledIcons className="bi bi-x-lg" onClick={(id) => props.removeSubTask(id)}/>
      </div>
  );
}

export default SubTask;