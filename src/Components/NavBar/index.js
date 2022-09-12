import {Component} from "react";
import {Listening} from "../Sections/Listening"
import {Reading} from "../Sections/Reading"
import {Writing} from "../Sections/Writing"
import {Speaking} from "../Sections/Speaking"
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
            <nav className = "navbar sticky navbar-expand-lg navbar-light bg-light">
                <StyledSelect
                    options={options}
                    value={this.state.value}
                    onChange={this.onChange}
                    // classNamePrefix="Study"
                />
                <Switch/>
                <StyledProfile/>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {links.map((link) => {
                            return (
                                <li className="nav-item">
                                    {/*<a className="nav-item nav-link active" href={link.url} key={link.id}>*/}
                                    <a className="nav-link" href={link.url} key={link.id}>
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}
