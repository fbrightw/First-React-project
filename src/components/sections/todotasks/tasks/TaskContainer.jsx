import React, {Component} from "react";
import SubmitForm from "../../../../utils/forms/SubmitForm";
import Task from "./Task";
import renderIf from "../../../../utils/common/renderIf";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default class TaskContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.nodeRef = React.createRef();
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
                    <TransitionGroup component="ul" className="my-appear">
                        {renderIf(this.state.tasks.length > 0,
                                // <div>
                                    this.state.tasks.map(task =>
                                        <CSSTransition key={task.id} timeout={500} nodeRef={this.nodeRef}>
                                            <Task
                                                key={task.key}
                                                task={task}
                                                removeTask={this.removeTask}
                                            />
                                        </CSSTransition>
                                    )
                                // </div>
                        )}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}
