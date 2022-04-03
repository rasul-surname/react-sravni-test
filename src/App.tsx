import React from 'react';

import {Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import PageCard from "./components/PageCard/PageCard";

const App = () => {
    return (
        <Routes>
            <Route path="react-sravni-test/" element={<HomePage />} />
            <Route path="react-sravni-test/page/:id" element={<PageCard />} />
        </Routes>
    );
}

export default App;
