import React, {Component} from 'react';
import './index.css'
import Home from "./Home";
import Todos from "./Todos";

export default class Sections extends Component {
    render() {
        return (
            <div>
                <Home />
                <section
                    className='toDo'
                    id="todo"
                >
                    <Todos />
                </section>
            </div>
        );
    }
}
