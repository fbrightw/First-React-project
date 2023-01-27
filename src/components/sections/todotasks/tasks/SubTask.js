import React, {useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";

function SubTask(props) {

  const [isChecked, onIsChecked] = useState(false);
  const [subtaskObj, setSubtaskObj] = useState(props.task)

  function onCheckboxClick() {
    onIsChecked(!isChecked);
  }

  function onSubTaskTextChanging(e) {
    setSubtaskObj(prev => ({
      ...prev,
      text: e.target.value
    }))
  }

  return (
      <div className="subtask-container" ref={subtaskObj.nodeRef}>
        <input type="checkbox" onClick={onCheckboxClick}/>
        <input type="text" className="task-text" value={subtaskObj.text} onChange={onSubTaskTextChanging}/>
        <div className="border"></div>
        <StyledIcons className="bi bi-x-lg" onClick={() => props.removeSubtask(props.task.id)}/>
      </div>
  );
}

export default SubTask;