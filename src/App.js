import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CreateShorts from './CreateShorts/CreateShorts';
import ReadShorts from './ReadShorts/ReadShorts';
import UpdateShorts from './UpdateShorts/UpdateShorts';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home/Home';
import DeleteShorts from './DeleteShorts/DeleteShorts';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateShorts />} />
                    <Route path="/read" element={<ReadShorts />} />
                    <Route path="/update" element={<UpdateShorts />} />
                    <Route path='/delete' element = {<DeleteShorts />} />
                </Routes>
        </BrowserRouter>
        
    )
};

export default App;

