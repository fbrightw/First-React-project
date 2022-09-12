import {Component} from "react";
import NavBar from "./NavBar/index";
import Calendar from 'react-calendar';
import Todos from "./Body/Todos"
// import 'react-calendar/dist/Calendar.css';
import "./index.css"

import {ParticlesBackgroundStyled} from "./Body/ParticlesBackground"

class RootComponent extends Component {

    // Day's word section
    // ability to underline (highlight word and remember, (maybe examples with quotes) and create section " Vocabulary "
    render() {
        return (
            <div>
                <NavBar />
                 <section className="motivation" id="motivation">
                     <h1>Motivation that we need</h1>
                     <ParticlesBackgroundStyled />
                 </section>
                 <section className='reading' id='reading'>
                    <h1>Reading</h1>
                 </section>
                <section className='toDo' id='toDo'>
                    <div className="todoList"><Todos/></div>
                 </section>
                 {/*<Animated />*/}
                {/*<div className="calendar">*/}
                {/*     <Calendar />*/}
                {/*    <div className="todoList"><Todos/></div>*/}
                {/* </div>*/}
                 {/*<Footer />*/}
             {/*</div>*/}
        </div>
        );
    }
}

export default RootComponent;