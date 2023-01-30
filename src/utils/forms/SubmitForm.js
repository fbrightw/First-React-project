import React from 'react';

class SubmitForm extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     tasksCount: 0
        // };

        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if (this._inputElement.value !== "") {
            let newTask = {
                text: this._inputElement.value,
                // id: this.state.tasksCount,
                id: Date.now(),
                nodeRef: React.createRef(null),
                subTasks: []
            };

            this.props.addTask(newTask);

            // this.state.tasksCount++;
            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    render(){
        return (
            <form>
                <input
                    ref={(a) => this._inputElement = a}
                    placeholder='Add new task'
                />
                <button onClick={this.addTask}>Add</button>
            </form>
        );
    }
}

export default SubmitForm;