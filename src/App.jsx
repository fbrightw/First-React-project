import React from 'react';
import Sections from "./components/sections";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";

function App() {
    return (
        <div>
            <NavBar/>
            <Sections/>
        </div>
    );
}

export default App;
