import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import {AppRouter} from "./components/router/AppRouter";

function App() {
    return (
        <div>
            <NavBar />
            <AppRouter />
        </div>
    );
}

export default App;
