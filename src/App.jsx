import React from 'react';
import Sections from "./Components/Sections";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./CSS/index.css"

function App() {
    return (
        <div style={{background: '#395F7C4C'}}>
            <NavBar/>
            <Sections/>
        </div>
    );
}

export default App;
