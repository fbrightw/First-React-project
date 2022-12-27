import React, {Component} from "react";
import SubmitForm from "../../utils/SubmitForm";
import TasksList from "../../utils/TasksList";

export default class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task) {
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
            <>
                <SubmitForm addTask={this.addTask}/>
                <TasksList
                    tasks={this.state.tasks}
                    removeTask={this.removeTask}
                />
            </>
        )
    }
}
