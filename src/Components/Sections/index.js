import React, {Component} from 'react';
import {ParticlesBackgroundStyled} from "../Body/ParticlesBackground";
import Todos from "../Body/Todos.jsx";
import './index.css'
import Home from "./Home";

export default class Sections extends Component {
    render() {
        return (
            <div className="Sections">
                <ParticlesBackgroundStyled />
                <Home />
                <section className='toDo' id='toDo'>
                    <div className="todoList">
                        <Todos />
                    </div>
                </section>
                {/*<div className="calendar">*/}
                {/*     <Calendar />*/}
                {/*    <div className="todoList"><Todos/></div>*/}
                {/* </div>*/}
            </div>
        );
    }
}
