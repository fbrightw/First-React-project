import React from 'react';

class Task extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
        // this.markDone = this.markDone.bind(this);
    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    render(){
        return (
            <div className="task-container">
                {/*<div>*/}
                    <input type="checkbox" className="custom-checkbox  checked:bg-blue-500"/>
                    <div>{this.props.text}</div>
                    {/*<div className='buttons-container'>*/}
                    {/*    <button className='done-button' onClick={this.markDone}>v</button>*/}
                    {/*    <button className='delete-button' onClick={this.removeTask}>x</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Task;