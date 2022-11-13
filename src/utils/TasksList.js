import React from 'react';
import './index.css'
import Task from './Task';

class TasksList extends React.Component{

    render(){
        return (
            <div className='tasks-list-container'>
                <div className='tasks-list'>
                    {this.props.tasks.map(task =>
                            <Task
                                id={task.id}
                                key={task.key}
                                text={task.text}
                                removeTask={this.props.removeTask}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default TasksList;