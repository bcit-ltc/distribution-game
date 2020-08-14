import React, { Component } from 'react';
import { ProgressBar, Form, Row } from 'react-bootstrap';
import { Truck } from 'react-bootstrap-icons';
import AnimatedNumerical from '../components/AnimatedNumerical';

class Supplier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,

        }
    }
    componentDidMount() {
        this.setState({ value: 100 / this.props.data.length });
    }

    renderProgressBar() {
        let my = this.props.data.map((element, index) => (
            <ProgressBar
                animated={this.props.processing}
                variant={index % 2 === 0 ? "info" : 'danger'}
                now={100 / this.props.data.length}
                key={index + 1}
                label={element} />)
        )

        return my;
    }

    render() {

        return (
            <Form.Group className="">
                <Row className="col-12 d-flex flex-row justify-content-between align-items-center">
                    <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>
                        {this.props.name}
                    </Form.Label>
                    
                </Row>
                <Row className="col-12 d-flex flex-row align-items-end justify-content-between">

                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger ">
                        <h2>{
                            <AnimatedNumerical
                                duration={100}
                                to={120}
                                from={12} />}</h2>
                        <sup style={{ letterSpacing: 1 }}>Sold</sup>
                        <Form.Control
                        value={this.props.newOrder}
                        onChange={(e) => {
                            //this.setState({ order: e.target.value > 0 ? e.target.value.slice(0, 3) : 0 });
                            this.props.updateOrder(parseInt(e.target.value > 0 ? e.target.value.slice(0, 3) : 0))
                        }}
                        className="" type="number" min={0} max={100} placeholder="0" />
                    </Form.Text>
                    <Row className="col-9 d-flex justify-content-end align-items-center  ">
                        <ProgressBar style={{ height: '25px', width: '100%' }} className="mb-2 ">
                            {this.renderProgressBar()}
                        </ProgressBar>
                        <p className="mt-2 text-white"><sup style={{ letterSpacing: 1, fontSize: 13 }}>
                        ({this.props.data.length} Days)
                        {/* <Truck color="royalblue" className="ml-2" size={30} /> */}
                    </sup></p>
                    </Row>

                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className=" text-success mt-3">
                    {this.props.name === null ? null : <sup className="text-info" style={{ letterSpacing: 1 }}>In Transit:
                        <AnimatedNumerical to={this.props.data.reduce((a, b) => a + b, 0)} from={0} />
                            {/* {this.props.data.reduce((a, b) => a + b, 0)} */}
                        </sup>
                        }
                        <h2>{
                            <AnimatedNumerical
                                to={123}
                                from={12} />}</h2>
                        <sup style={{ letterSpacing: 1 }}>On Hand</sup>
                        
                    </Form.Text>
                </Row>
            </Form.Group >

        )
    }
}

export default Supplier;