import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/style.css';
class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div id="app" style={{ height: '100%', minHeight: '100vh' }} className=" col-12 d-flex col-sm-justify-content-start flex-column justify-content-center align-items-center col-12 h-100 text-white">
                <span className=" p-5" style={{ backgroundColor: 'rgb(1,1,1,0.8)', borderRadius: 10 }}>
                    <h2 className="text-center text-info" style={{ letterSpacing: 3 }}>The Distribution Game:</h2>
                    <div style={{ fontSize: '1.2rem', height: '100%' }} className=" col-12 text-monospace">
                        <p className="mt-4">Select one of the following game modules to play:</p>
                        <Row className="text-start mt-4 d-flex flex-column align-items-center">
                            <Link to="/directShipGame">
                                <Button
                                    variant="success"
                                    //onClick={() => this.props.setModule('Direct Ship: No Central Warehouse')}
                                    >
                                    Direct Ship: No Central Warehouse
                                </Button>
                            </Link>


                            <Link to="/baseGame">
                                <Button className="mt-3"
                                    variant="success"
                                    //onClick={() => this.props.setModule('Direct Ship: Central Warehouse')}
                                    >
                                    Base Game: Central Warehouse
                            </Button>
                            </Link>
                        </Row>

                    </div>
                </span>
            </div>
        )
    }
}

export default LandingPage;