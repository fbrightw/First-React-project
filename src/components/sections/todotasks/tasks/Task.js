import React, {useEffect, useId, useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import renderIf from "../../../../utils/common/renderIf";
import SubTask from "./SubTask";

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

  function removeSubtask(id) {
    const subtasks = subTasksArray.filter(element => (element.id !== id));
    setSubTasksArray(subtasks);
  }

  useEffect(() => {
    setSubtaskId(subtaskId + 1)
  }, [subTasksArray])

  function onPlusClicked() {
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
            <div className="subtask-container-list">
              {subTasksArray.map(el =>
                  <SubTask
                      task={el}
                      key={el.id}
                      removeSubtask={(id) => removeSubtask(id)}
                  />
              )}
            </div>
        )}
      </>
  )
}
