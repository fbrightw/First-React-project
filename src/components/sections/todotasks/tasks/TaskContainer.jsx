import React, {Component, useState} from "react";
import SubmitForm from "../../../../utils/forms/SubmitForm";
import Task from "./Task";
import renderIf from "../../../../utils/common/renderIf";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Folders from "../Folders";

export function TaskContainer() {

    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        setTasks(prevState => [
            ...prevState,
            task
        ])
    }

    function removeTask(id) {
        const tasksArr = tasks.filter(element => (element.id !== id));
        setTasks(tasksArr)
    }

    function onTaskObjChange(obj) {

    }

    return (
        <div id="todo">
            <div className="tasks">
                <Folders />
                <div style={{margin: "10px auto"}}>
                    <SubmitForm addTask={addTask}/>
                    <div className="font-sans my-10 text-2xl font-light tracking-wide">
                        Today's task:
                    </div>
                    {renderIf(tasks.length > 0,
                        <TransitionGroup component="ul" className="task-container-list">
                            {tasks.map(task =>
                                <CSSTransition key={task.id} nodeRef={task.nodeRef} timeout={500} classNames="item">
                                    <Task
                                        removeTask={removeTask}
                                        task={task}
                                        onTaskObjChange={onTaskObjChange}
                                    />
                                </CSSTransition>
                            )}
                        </TransitionGroup>,
                        <div>no tasks</div>
                    )}
                    </div>
            </div>
        </div>
    )
}
