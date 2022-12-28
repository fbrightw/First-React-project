import React from 'react';

class SubmitForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasksCount: 0
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                id: this.state.tasksCount,
                key: Date.now()
            };

            this.props.addTask(newItem);

            this.state.tasksCount++;
            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.addItem}>
                <input
                    ref={(a) => this._inputElement = a}
                    placeholder='Add Task'
                />
                {/*<button type='submit'>Add</button>*/}
            </form>
        );
    }
}

export default SubmitForm;