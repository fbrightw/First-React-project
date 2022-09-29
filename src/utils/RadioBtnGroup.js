import React, {Component} from "react";
import {FormControlLabel, Radio} from '@mui/material';
import SubmitForm from "./SubmitForm";
import TasksList from "./TasksList";

export class RadioBtnGroup extends Component {

    constructor(props) {
        super(props);
        this.state ={tasks: []}

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.addRadioButton = this.addRadioButton.bind(this)
    }

    addRadioButton() {
        return  <FormControlLabel value="female" control={<Radio />} label="Female" />
    }


    addTask(task){
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(task)
            };
        });
    }

    removeTask(id) {
        const tasks = this.state.tasks.filter(element => (element.id !== id));
        this.setState({tasks: tasks});
    }


    render() {
        return (
            <div>
                <section>
                    <SubmitForm addTask={this.addTask}/>
                    <TasksList tasks={this.state.tasks} removeTask={this.removeTask}/>
                </section>
            </div>
        )
    }
}