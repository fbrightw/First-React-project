import React, {Component} from 'react';
import Home from "./home/Home";
import Todos from "./todotasks/Todos";
import Table from "./table";

export default class Sections extends Component {
    render() {
        return (
            <div>
              <section>
                <Home />
              </section>
              <section>
                <Todos />
              </section>
              <section id="myTable">
                <Table />
              </section>
            </div>
        );
    }
}
