import React from 'react';
import Sections from "./Components/Sections";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/index.css"

function App() {
    return (
        <div className="mainStyle">
            <NavBar/>
            <Sections/>
        </div>
    );
}

export default App;
