import React, {Component} from "react";
import {StyledProfile} from "./elements"
import "./styledselect.css"
import "./navbar.css"
import Switch from "./Switch";
import {links} from "./data"

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
            <nav className="navbar sticky">
                <Switch />
                <StyledProfile/>
                <ul>
                    {links.map((link) => {
                        return (
                            <li className="breadcrumb" key={link.id}>
                                <a className="a" href={link.url}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
