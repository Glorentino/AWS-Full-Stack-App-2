import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './index';
import Navbar from './components/';
import Note from './notepage';
import Market from "./market";
const Hero = () => {
    return (
        <section >

                <Router>
                < Navbar/> 
                    <Routes>
                        <Route  exact path='/' element={<Home/>} />
                        <Route  exact path='/notes' element={<Note/>} />
                        <Route  exact path='/market' element={<Market/>} />
                    </Routes>
                </Router>

        </section>
    )
}
export default Hero;