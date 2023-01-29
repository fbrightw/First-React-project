import React, {Component} from 'react';
import Home from "./home/Home";
import TaskContainer from "./todotasks/tasks/TaskContainer";
import Table from "./table";
import LanguageTrainer from "./trainer";

export default class Sections extends Component {
    render() {
        return (
            <div>
              <Home />
              <TaskContainer />
              <LanguageTrainer />
              <Table />
            </div>
        );
    }
}
