import React, {useState} from 'react';
import SubTask from "./SubTask";

function SubTaskContainer(props) {

  function removeSubTask() {

  }

  return (
      <div className="subtask-container-list">
        {props.subTasksArray.map(el =>
            <SubTask
                task={el}
                key={el.key}
                removeSubTask={removeSubTask}
            />
        )}
      </div>
  );
}

export default SubTaskContainer;