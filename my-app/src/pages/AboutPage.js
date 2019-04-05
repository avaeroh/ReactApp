import React from 'react';
import jondog from '../images/dog.jpg';

export class AboutPage extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="Pages">
                <p>
                    Clever opening line.
                </p>
                <img src={jondog} alt="Picture of idiot not available" height="200" />
                <p>
                    Some text some text some text some text some text 
                    some text some text some text some text some text 
                    some text some text some text some text some text 
                </p>
            </div>
        )
    }
}