import React, {Component} from 'react';
import {ParticlesBackgroundStyled} from "../Body/ParticlesBackground";
import Animated from "../Body/Animated.js";
import Todos from "../Body/Todos.jsx";
import './index.css'

export default class Sections extends Component {
    render() {
        return (
            <div>
                <section className="motivation" id="motivation">
                    <h1>Motivation that we need</h1>
                    <ParticlesBackgroundStyled />
                </section>
                <section className='reading' id='reading'>
                    <h1>Reading</h1>
                </section>
                <section className='toDo' id='toDo'>
                    <div className="todoList"><Todos /></div>
                </section>
                {/*<Animated />*/}
                {/*<div className="calendar">*/}
                {/*     <Calendar />*/}
                {/*    <div className="todoList"><Todos/></div>*/}
                {/* </div>*/}
            </div>
        );
    }
}
