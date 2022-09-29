import React, {Component} from 'react';
import Todos from "../Body/Todos.jsx";
import './index.css'
import Home from "./Home";

export default class Sections extends Component {
    render() {
        return (
            <div>
                <Home />
                <section className='toDo' id="todo">
                    {/*<div className="todoList">*/}
                        <Todos />
                    {/*</div>*/}
                </section>
            </div>
        );
    }
}
