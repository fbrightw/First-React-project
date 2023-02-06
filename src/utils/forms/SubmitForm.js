import React from 'react';

class SubmitForm extends React.Component{

    constructor(props){
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if (this._inputElement.value !== "") {
            let newTask = {
                id: Date.now(),
                text: this._inputElement.value,
                nodeRef: React.createRef(null),
                subTasks: []
            };

            this.props.addTask(newTask);
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