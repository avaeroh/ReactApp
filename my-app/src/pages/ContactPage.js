import React from 'react';

export class ContactPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <ul>
                    <li>
                        <h3>Email Address</h3>
                        <p>jonathan.mh@hotmail.co.uk</p>
                    </li>
                        <h3>Mobile number</h3>
                        <p>+44 7913996370</p>
                </ul>
            </div>
        )
    }
}