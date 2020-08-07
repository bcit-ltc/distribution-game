import React, { Component } from 'react';
import { ProgressBar, Form, Row } from 'react-bootstrap';
import { Truck } from 'react-bootstrap-icons';


class Supplier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            order: null
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
            <Form.Group className="mt-1">
                <Row className="col-12 d-flex flex-row justify-content-between align-items-center">
                    <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>
                        {this.props.name}
                    </Form.Label>
                    <Form.Text style={{ fontSize: 18, letterSpacing: 3 }} className="text-info mt-1">

                        <sup style={{ letterSpacing: 1 }}>In Transit: 0</sup>
                    </Form.Text>
                </Row>
                <Row className="col-12 justify-content-end align-items-center">
                    <ProgressBar style={{ height: '25px', width: '100%' }} className="mb-2 ">
                        {this.renderProgressBar()}
                    </ProgressBar>

                </Row>
                <Row className="col-12 justify-content-between align-items-center">
                    <Form.Control
                        value={this.state.order}
                        onChange={(e) => {
                            this.setState({ order: e.target.value > 0 ? e.target.value.slice(0, 3) : 0 });
                            this.props.updateOrder(parseInt(e.target.value > 0 ? e.target.value.slice(0, 3) : 0))
                        }}
                        className="col-1" type="number" min={0} max={100} placeholder="0" />
                    <p className="mt-2"><sup style={{ letterSpacing: 1, fontSize: 13 }}>
                        (18 Days)
                        {/* <Truck color="royalblue" className="ml-2" size={30} /> */}
                        </sup></p>
                </Row>

            </Form.Group>

        )
    }
}

export default Supplier;