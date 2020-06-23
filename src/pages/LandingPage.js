import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div id="app" style={{ height: '100%', minHeight: '100vh' }} className=" col-12 d-flex flex-column justify-content-center align-items-center col-12 h-100 text-white">
                <span className=" p-5" style={{ backgroundColor: 'rgb(1,1,1,0.8)', borderRadius: 10 }}>
                    <h2 className="text-center" style={{ letterSpacing: 3 }}><u>The Distribution Game</u></h2>
                    <div style={{ fontSize: '1.2rem' }} className=" col-12 text-monospace font-size-large">
                        <p className="mt-5">Select one of the following game modules to play:</p>
                        <ul style={{ listStyleType: 'none' }} className="text-start">
                            <li><Button variant="success">Direct Ship</Button>
                                <p style={{ fontSize: '1rem' }} className="ml-1 mt-2">No Central Warehouse</p>
                            </li>
                            <li>
                                <Button variant="success">Base Game</Button>
                                <p style={{ fontSize: '1rem' }} className="ml-1 mt-2">Central Warehouse</p>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        )
    }
}

export default LandingPage;