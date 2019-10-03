import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = ({ changeCurrent }) => {
    return (
        <nav>
            <h1>What's New?</h1>
            <ul>
                <li id='local' onClick={changeCurrent}>Local News</li>
                <li id='entertainment' onClick={changeCurrent}>Entertainment</li>
                <li id='health' onClick={changeCurrent}>Health</li>
                <li id='science' onClick={changeCurrent}>Science</li>
                <li id='technology' onClick={changeCurrent}>Technology</li>
            </ul>
        </nav>
    )
}

export default Menu;