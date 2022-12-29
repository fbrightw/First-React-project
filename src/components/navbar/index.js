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
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="tasks" className="menu-item" href="/tasks">Tasks</a>
                {/*<a id="contact" className="menu-item" href="/contact">Contact</a>*/}
                {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
            </Menu>
        );
    }
}
