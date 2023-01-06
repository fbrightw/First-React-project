import React, {Component} from 'react';
import Home from "./home/Home";
import Todos from "./todotasks/tasks/Todos";
import Table from "./table";

export default class Sections extends Component {
    render() {
        return (
            <div>
              <Home />
              <section>
                <Todos />
              </section>
              <section>
                <Table />
              </section>
            </div>
        );
    }
}
