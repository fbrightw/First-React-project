import React, {Component} from "react";
import SubmitForm from "../../../../utils/SubmitForm";
import TasksList from "./TasksList";
import PersonalCalendar from "../calendar/PersonalCalendar";
import ModalPanel from "../../../../utils/ModalPanel";

export default class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isPlusClicked: false
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.onPlusClick = this.onPlusClick.bind(this);
    }

    onPlusClick(value) {
        this.setState({
            isPlusCLicked: value
        })
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
                    {this.state.isPlusCLicked ? <ModalPanel
                        isClicked={this.state.isPlusCLicked}
                        onPlusClick={(value) => this.onPlusClick(value)}
                        /> : null}
                    <SubmitForm addTask={this.addTask}/>
                    <div className="font-sans my-10 text-2xl font-light tracking-wide">
                        Today's task:
                    </div>
                    <TasksList
                        tasks={this.state.tasks}
                        number={this.state.number}
                        removeTask={this.removeTask}
                        onPlusClick={(value) => this.onPlusClick(value)}
                    />
                </div>
                <PersonalCalendar />
            </div>
        )
    }
}
