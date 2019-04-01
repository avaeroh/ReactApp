
import React from 'react';

const navigationbuttons = [ <button onClick={takeMeHome}>Home</button>, <button>About</button>, <button>Contact</button> ]

function takeMeHome() {
    alert("This doesn't work lol");
}

export class NavBar extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            navigationbuttons
        );
    }
}