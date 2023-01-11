import React, {useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";

const defaultObj = {
  id: 'id' + (new Date()).getTime(),
  text: null
}

export default function Task(props) {

  const [subTasksArray, setSubTasksArray] = useState([])

  function removeTask(){
    props.removeTask(props.id);
  }

  function onCheckboxClick(e) {
    console.log("onCLick yuj", e)
  }

  function onTextChanging(e) {
    console.log("text", e)
  }

  function onPlusClicked() {
    setSubTasksArray(oldArray => [...oldArray, defaultObj])
  }

  return (
      <>
        <div className="task-container">
          <input type="checkbox" className="larger" onClick={onCheckboxClick}/>
          <div className="task-text" onChange={onTextChanging}>{props.text}</div>
          <StyledIcons className="bi bi-plus-lg" onClick={onPlusClicked}/>
          <div className="border"></div>
          <StyledIcons className="bi bi-x-lg" onClick={removeTask}/>
        </div>
        {subTasksArray.length > 0 ?
            <div className="subtask-container-list">
              {subTasksArray.map(el => (
                <div className="subtask-container">
                  <input type="checkbox" onClick={onCheckboxClick}/>
                  <div className="task-text" onChange={onTextChanging}>{el.text}</div>
                  <div className="border"></div>
                  <StyledIcons className="bi bi-x-lg" onClick={removeTask}/>
                </div>
              ))}
            </div>
            :
            null
        }
      </>
  )
}
