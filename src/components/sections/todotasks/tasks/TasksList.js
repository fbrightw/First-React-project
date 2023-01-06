import React from 'react';
import Task from './Task';

class TasksList extends React.Component{

  render() {
    return (
        <div className="task-container-list">
          {this.props.tasks.map(task =>
              <Task
                  id={task.id}
                  key={task.key}
                  text={task.text}
                  removeTask={this.props.removeTask}
              />
          )}
        </div>
    )
  }
}

export default TasksList;