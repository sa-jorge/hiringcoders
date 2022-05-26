import React from "react";
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Repos from "./Pages/Repositories/index";
import Home from "./Pages/Home/index"

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/repositories" element={<Repos/>} />
            </Routes>
        </Router>
    );
}

export default Rotas;