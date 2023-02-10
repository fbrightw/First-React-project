import React from "react";
import { slide as Menu } from 'react-burger-menu'
import './navbar.css'
import {useTypesSelector} from "../../hooks/useTypesSelector";

export default function NavBar(props) {
    const {isAuth} = useTypesSelector(state => state.auth)

    return (
        isAuth ?
        <Menu>
            <a id="home" className="menu-item" href="/">
                <i className="bi bi-house"></i>
            </a>
            <a id="login" href="/login">
                <i className="bi bi-person"></i>
            </a>
            <a id="todo" className="menu-item" href="/tasks">
                <i className="bi bi-list-task"></i>
            </a>
            <a id="table" className="menu-item"  href="/table">
                <i className="bi bi-table"></i>
            </a>
            <a id="calendar" className="menu-item"  href="/calendar">
                <i className="bi bi-calendar"></i>
            </a>
        </Menu>
         :
            <Menu>
              <a id="login" href="/login">
                <i className="bi bi-person"></i>
              </a>
            </Menu>
    );
}
