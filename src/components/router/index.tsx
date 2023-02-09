import Login from '../sections/login/Login'
import React from "react";
import {TaskContainer} from "../sections/todotasks/tasks/TaskContainer";
import Home from "../sections/home/Home";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    LOGIN = '/login',
    HOME = '/',
    TASKS = '/tasks'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login />},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>},
    {path: RouteNames.HOME, element: <Home />},
    {path: RouteNames.TASKS, element: <TaskContainer />}
]
