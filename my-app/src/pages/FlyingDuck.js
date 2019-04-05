import React from 'react';
import logo from '../images/logo.svg';

export class FlyingDuck extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return(
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}