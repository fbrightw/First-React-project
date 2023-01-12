import React, {Component} from 'react';
import Home from "./home/Home";
import TaskContainer from "./todotasks/tasks/TaskContainer";
import Table from "./table";

export default class Sections extends Component {
    render() {
        return (
            <div>
              <Home />
              <section>
                <TaskContainer />
              </section>
              <section>
                <Table />
              </section>
            </div>
        );
    }
}
