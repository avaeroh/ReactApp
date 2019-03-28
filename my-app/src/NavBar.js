
import React from 'react';

const data = [ <button onClick={takeMeHome}>Home</button>, <button>About</button>, <button>Contact</button> ]

function takeMeHome() {
    alert("This doesn't work lol");
}

export class NavBar extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            data
        );
    }
}