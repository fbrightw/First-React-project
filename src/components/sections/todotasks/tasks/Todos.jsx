import React, {Component} from "react";
import SubmitForm from "../../../../utils/SubmitForm";
import TasksList from "./TasksList";
import PersonalCalendar from "../calendar/PersonalCalendar";

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
                tasks: prevState.tasks.concat(task),
            };
        });
    }

    removeTask(id) {
        const tasks = this.state.tasks.filter(element => (element.id !== id));
        this.setState({tasks: tasks});
    }

    render() {
        return (
            <div id="todo">
                <div className="tasks">
                    <SubmitForm addTask={this.addTask}/>
                    <div className="font-sans my-10 text-2xl font-light tracking-wide">
                        Today's task:
                    </div>
                    <TasksList
                        tasks={this.state.tasks}
                        number={this.state.number}
                        removeTask={this.removeTask}
                    />
                </div>
                <PersonalCalendar />
            </div>
        )
    }
}
