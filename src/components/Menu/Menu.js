import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = () => {
    return (
        <nav>
            <h1>What's New?</h1>
            <ul>
                <li id='local'>Local News</li>
                <li id='entertainment'>Entertainment</li>
                <li id='health'>Health</li>
                <li id='science'>Science</li>
                <li id='tech'>Technology</li>
            </ul>
        </nav>
    )
}

export default Menu;