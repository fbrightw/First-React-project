import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

class Task extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    render(){
        return (
            <div className="task-container">
                <input type="checkbox" className="larger"/>
                <div className="task-text">{this.props.text}</div>
                <div className="close">
                    <CloseIcon fontSize="small"/>
                </div>
            </div>
        );
    }
}

export default Task;