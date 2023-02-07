import React, {createRef, FC, RefObject, useEffect, useState} from 'react';
import StyledIcons from "../../../../utils/StyledIcons";
import renderIf from "../../../../utils/common/renderIf";
import SubTask from "./SubTask";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../../../../index.css'

interface ITask {
    id: number,
    text: string,
    subTasks: ISubTasks[],
    nodeRef?: RefObject<HTMLInputElement>,
}

interface TaskProps {
    task: ITask,
    removeTask: (id: number) => void
    onTaskObjChange: (obj: ITask) => void
}

export const defaultObj = {
  id: 'id' + (new Date()).getTime(),
  text: ''
}

interface ISubTasks {
    id: string,
    text: string,
    nodeRef?: RefObject<HTMLInputElement>
}

const Task: FC<TaskProps> = (props: TaskProps) => {

  const [subTasksArray, setSubTasksArray] = useState<ISubTasks[]>([]);
  const [isChecked, onIsChecked] = useState(false);
  const [taskObject, setTaskObject] = useState<ITask>(props.task);
  const [isCaretClicked, onIsCaretClicked] = useState(true);

  function removeTaskById(){
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

  useEffect(() => {
      setTaskObject({
          ...taskObject,
          subTasks: subTasksArray
      })
    props.onTaskObjChange(taskObject)
  }, [subTasksArray])

  function removeSubtask(id) {
    const subtasks = subTasksArray.filter(element => (element.id !== id));
    setSubTasksArray(subtasks);
  }

  function onPlusClicked() {
      let newObj = {
          id: 'id'+ new Date(),
          text: "",
          nodeRef: createRef(null)
      }
    // @ts-ignore
      setSubTasksArray( [...subTasksArray, newObj]);
  }

  function setClassName() {
    return (isChecked ? "task-container-green" : "task-container")
  }

  function onCaretClick() {
    onIsCaretClicked(!isCaretClicked);
    const div = document.getElementById("caret")
      console.log("dfg", document, div)
      // @ts-ignore
      if(div.className == "bi bi-caret-down") {
          div.className = "bi bi-caret-up";
      }
      else {
          div.className = 'bi bi-caret-down'
          }
  }

  return (
      <>
        <div className={setClassName()} ref={props.task.nodeRef}>
          <input type="checkbox" onClick={onCheckboxClick}/>
          <StyledIcons className="bi bi-caret-down" id="caret" onClick={onCaretClick}/>
          <div className="border"></div>
          <input type="text" className="task-text" value={taskObject.text} onChange={onTextChanging}/>
          <StyledIcons className="bi bi-plus-lg" onClick={onPlusClicked}/>
          <div className="border"></div>
          <StyledIcons className="bi bi-x-lg" onClick={removeTaskById}/>
        </div>
        {renderIf(subTasksArray.length > 0 && isCaretClicked,
              <TransitionGroup component="ul" className="subtask-container-list">
                {taskObject.subTasks.map(el =>
                    <CSSTransition key={el.id} nodeRef={el.nodeRef} timeout={500} classNames="item">
                      <SubTask
                          task={el}
                          key={el.id}
                          removeSubtask={(id) => removeSubtask(id)}
                      />
                    </CSSTransition>
                )}
              </TransitionGroup>
        )}
      </>
  )
}

export default Task;