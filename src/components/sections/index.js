import React, {Component} from 'react';
import Home from "./home/Home";
import Todos from "./todotasks/Todos";

export default class Sections extends Component {
    render() {
        return (
            <div>
                <Home />
                <section id="todo">
                    <Todos />
                    {/*<PersonalCalendar />*/}
                </section>
              {/*<section >*/}
              {/*      <Words />*/}
              {/*</section>*/}
            </div>
        );
    }
}
