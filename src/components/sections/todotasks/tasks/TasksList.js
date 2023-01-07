import React from 'react';
import Task from './Task';

function TasksList(props) {

    return (
        <div className="task-container-list">
          {props.tasks.map(task =>
              <Task
                  id={task.id}
                  key={task.key}
                  text={task.text}
                  removeTask={props.removeTask}
                  onPlusClick={props.onPlusClick}
              />
          )}
        </div>
    )
}

export default TasksList;