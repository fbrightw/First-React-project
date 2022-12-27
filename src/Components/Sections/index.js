import React, {Component} from 'react';
import Home from "./Home";
import Todos from "./Todos";

export default class Sections extends Component {
    render() {
        return (
            <div>
                <Home />
                <section id="todo">
                    <Todos />
                </section>
            </div>
        );
    }
}
