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
        this.setState({ value: 100 / this.props.data.order.length });
    }

    renderProgressBar() {
        let my = this.props.data.order.map((element, index) => (
            <ProgressBar
                style={{width: '100%'}}
                animated={this.props.processing}
                variant={index % 2 === 0 ? "info" : 'danger'}
                now={100 / this.props.data.order.length}
                key={index + 1}
                label={element} />)
        )

        return my;
    }

    render() {

        return (
            <Form.Group className="border-bottom mt-2">
                <Row className="col-12 m-1 d-flex flex-row justify-content-between align-items-center">
                    <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>
                        {this.props.name}
                    </Form.Label>
                </Row>
                <Row className="col-12 pb-3 d-flex flex-row align-items-start justify-content-between">

                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-danger ">
                        <h2>{
                            <AnimatedNumerical
                                duration={100}
                                to={this.props.data.sold}
                                from={0} />}</h2>
                        <sup style={{ letterSpacing: 1 }}>Sold</sup>
                        <Form.Control
                            value={this.props.newOrder}
                            onChange={(e) => {
                                //this.setState({ order: e.target.value > 0 ? e.target.value.slice(0, 3) : 0 });
                                this.props.updateOrder(parseInt(e.target.value > 0 ? e.target.value.slice(0, 3) : 0))
                            }}
                            type="number" min={0} max={100} placeholder="0" />
                    </Form.Text>
                    <Row className="col-10 d-flex flex-column justify-content-between align-items-end  ">
                        <p className="">{<sup className="text-info" style={{ letterSpacing: 1 }}>In Transit:
                        <AnimatedNumerical
                                to={this.props.data.order.reduce((a, b) => a + b, 0)}
                                from={0} />
                            {/* {this.props.data.reduce((a, b) => a + b, 0)} */}
                        </sup>
                        }</p>
                        <ProgressBar style={{ height: '25px', width: '100%' }} className=" ">
                            {this.renderProgressBar()}
                        </ProgressBar>
                        <p className="mt-3 text-white"><sup style={{ letterSpacing: 1, fontSize: 13 }}>
                            ({this.props.data.order.length} Days)
                        {/* <Truck color="royalblue" className="ml-2" size={30} /> */}
                        </sup></p>
                    </Row>

                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-success ml-2 mt-3">
                        <h2>{
                            <AnimatedNumerical
                                to={this.props.data.inStock}
                                from={0} />}</h2>
                        <sup style={{ letterSpacing: 1 }}>On Hand</sup>
                    </Form.Text>
                </Row>
            </Form.Group >

        )
    }
}

export default Supplier;