import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import SignIn from "./pages/signIn";

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    )
}