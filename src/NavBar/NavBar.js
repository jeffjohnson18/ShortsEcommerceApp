import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './NavBar.css';

export default function NavBar(){
    return (
        <nav className="nav">
            <a href="/" className="site-title">Shorts</a>
            <ul>
                <li>
                    <a href="/create">Create</a>
                </li>
                <li>
                    <a href="/read">Read</a>
                </li>
                <li>
                    <a href="/update">Update</a>
                </li>
                <li>
                    <a href="/delete">Delete</a>
                </li>
            </ul>
        </nav>
    )
}