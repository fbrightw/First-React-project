import React, {Component} from "react";
import {Listening} from "../Sections/Listening.jsx"
import {Reading} from "../Sections/Reading.jsx"
import {Writing} from "../Sections/Writing.jsx"
import {Speaking} from "../Sections/Speaking.jsx"
import {StyledSelect, StyledProfile} from "./elements"
import "./index.css"
import "../../App.css"
import Switch from "./Switch";
import {links, options} from "./data"

export default class NavBar extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    routes() {
        return [
            {
                key: "li",
                // path:
                component: () => <Listening/>
            },
            {
                key: "li",
                // path:
                component: () => <Reading/>
            },
            {
                key: "li",
                // path:
                component: () => <Writing/>
            },
            {
                key: "li",
                // path:
                component: () => <Speaking/>
            }
        ]
    }

    onChange(value) {
        this.setState({
                value: value
            }, () => console.log("value", this.state.value));
    }

    render() {
        return (
            <nav className = "navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className='navbar-container'>
                    <StyledSelect
                        options={options}
                        value={this.state.value}
                        onChange={this.onChange}
                        // classNamePrefix="Study"
                    />
                    <Switch />
                    <StyledProfile/>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {links.map((link) => {
                                return (
                                    <li className="nav-item" key={link.id}>
                                        {/*<a className="nav-item nav-link active" href={link.url} key={link.id}>*/}
                                        <a className="nav-link" href={link.url}>
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
