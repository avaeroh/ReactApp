import React from 'react';
import logo from './logo.svg';

const titleText = "Jonathan is a bad developer and isn't all that great a tester either."

export class AboutPage extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <p>
                    {titleText}
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="http://lmgtfy.com/?q=how+to+use+react+properly"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <br/>
                    Yo
              </a>
            </div>
        )
    }
}