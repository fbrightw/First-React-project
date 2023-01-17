import React from 'react';

class SubmitForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasksCount: 0
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if (this._inputElement.value !== "") {
            let newTask = {
                text: this._inputElement.value,
                id: this.state.tasksCount,
                key: Date.now()
            };

            this.props.addTask(newTask);

            this.state.tasksCount++;
            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.addTask}>
                <input
                    ref={(a) => this._inputElement = a}
                    placeholder='Add new task'
                />
            </form>
        );
    }
}

export default SubmitForm;