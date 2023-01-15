import React, {useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import SubTaskContainer from "./SubTaskContainer";

export const defaultObj = {
  id: 'id' + (new Date()).getTime(),
  text: null
}

export default function Task(props) {

  const [subTasksArray, setSubTasksArray] = useState([]);
  const [isChecked, onIsChecked] = useState(false);
  const [taskObj, setTaskObject] = useState(props.task);

  function removeTask(){
    props.removeTask(props.task.id);
  }

  function onCheckboxClick(e) {
      onIsChecked(!isChecked);
  }

  function onTextChanging(e) {
    setTaskObject(prev => ({
      ...prev,
      text: e.target.value
    }))
  }

  function onPlusClicked() {
    setSubTasksArray(oldArray => [...oldArray, defaultObj])
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
        {/*make connect btw task and array of subtasks*/}
        {subTasksArray.length > 0 ?
            <SubTaskContainer
                subTasksArray={subTasksArray} //no need if connection is set
                taskId={props.task.id}
            />
            :
            null
        }
      </>
  )
}
