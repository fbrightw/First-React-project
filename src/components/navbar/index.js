import React, {Component} from "react";
import './navbar.css'
import { slide as Menu } from 'react-burger-menu'

export default class NavBar extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">
                    <i className="bi bi-house"></i>
                </a>
                <a id="login" href="/login">
                    <i className="bi bi-person"></i>
                </a>
                <a id="tasks" className="menu-item" href="/tasks">
                    <i className="bi bi-list-task"></i>
                </a>
                <a id="table" className="menu-item"  href="/table">
                    <i className="bi bi-table"></i>
                </a>
                <a id="calendar" className="menu-item"  href="/calendar">
                    <i className="bi bi-calendar"></i>
                </a>
            </Menu>
        );
    }
}
