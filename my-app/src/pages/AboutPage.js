import React from 'react';
import jondog from '../images/dog.jpg';

export class AboutPage extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="Pages" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={jondog} alt="Picture of idiot not available" style={{ width: '20%', marginRight: '10px' }}/>
                    <p classname="StandardText" >
                        La la la la la la la la la la la la la la la la la la la la la la la 
                    </p>
                </div>
            </div>
        )
    }
}