import React, {useId, useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import SubTaskContainer from "./SubTaskContainer";
import renderIf from "../../../../utils/common/renderIf";

export const defaultObj = {
  id: 'id' + (new Date()).getTime(),
  text: null
}

export default function Task(props) {

  const [subTasksArray, setSubTasksArray] = useState([]);
  const [isChecked, onIsChecked] = useState(false);
  const [taskObj, setTaskObject] = useState(props.task);
  const [subtaskId, setSubtaskId] = useState(0);

  function removeTask(){
    props.removeTask(props.task.id);
  }

  function onCheckboxClick() {
      onIsChecked(!isChecked);
  }

  function onTextChanging(e) {
    setTaskObject(prev => ({
      ...prev,
      text: e.target.value
    }))
  }

  function onPlusClicked() {
    setSubtaskId(prev => prev++);
    setSubTasksArray(oldArray => [...oldArray, {id: subtaskId, text: ""}]);
  }

  function setClassName() {
    return (isChecked ? "task-container-green" : "task-container")
  }

  return (
      <>
        <div className={setClassName()}>
          <input type="checkbox" onClick={onCheckboxClick}/>
          <input type="text" className="task-text" value={taskObj.text} onChange={onTextChanging}/>
          <StyledIcons className="bi bi-plus-lg" onClick={onPlusClicked}/>
          <div className="border"></div>
          <StyledIcons className="bi bi-x-lg" onClick={removeTask}/>
        </div>
        {renderIf(subTasksArray.length > 0,
            <SubTaskContainer
                subTasksArray={subTasksArray}
                taskId={props.task.id}
                removeSubTask={(id) => {
                  setSubTasksArray(subTasksArray.splice(subTasksArray.findIndex((obj) => obj.id === id), 1))
                }}
            />
        )}
      </>
  )
}
