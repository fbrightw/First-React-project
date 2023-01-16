import React, {useState} from 'react';
import SubTask from "./SubTask";

function SubTaskContainer(props) {

  return (
      <div className="subtask-container-list">
        {props.subTasksArray.map(el =>
            <SubTask
                task={el}
                key={el.id}
                removeSubTask={(id) => props.removeSubTask(id)}
            />
        )}
      </div>
  );
}

export default SubTaskContainer;