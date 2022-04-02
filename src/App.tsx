import React from 'react';

import {Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import PageCard from "./components/PageCard/PageCard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page/:id" element={<PageCard />} />
        </Routes>
    );
}

export default App;
