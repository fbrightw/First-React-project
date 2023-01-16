import React, {Component} from "react";
import SubmitForm from "../../../../utils/forms/SubmitForm";
import Task from "./Task";
import renderIf from "../../../../utils/common/renderIf";

export default class TaskContainer extends Component {

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
                    {renderIf(this.state.tasks.length > 0,
                        <div className="task-container-list">
                            {this.state.tasks.map(task =>
                                <Task
                                    key={task.key}
                                    task={task}
                                    removeTask={this.removeTask}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
