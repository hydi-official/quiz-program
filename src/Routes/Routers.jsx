import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';
import Products from '../Pages/Products';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Routers;
