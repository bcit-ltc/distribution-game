import React, { Component } from 'react';
import { ProgressBar, Form } from 'react-bootstrap';
import { ShopWindow } from 'react-bootstrap-icons';


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
        //this.processShipment()
    }

    // processShipment() {
    //     this.setState({ value: 1 });
    //     const timer = setInterval(() => {
    //         if (this.state.value < 8.5) {
    //             this.setState({ value: this.state.value + 2 })
    //         }

    //     }, 1050);

    //     return () => clearInterval(timer);


    // }

    renderProgressBar() {
        let my = this.props.data.map((element, index) => (
            <ProgressBar
                animated={this.props.processing}
                variant={index % 2 === 0 ? "info" : 'danger'}
                now={100/this.props.data.length}
                key={index + 1}
                label={element} />)
        )

        return my;
    }

    render() {

        return (
            <Form.Group className="mt-1">
                <Form.Label style={{ fontSize: '20px', letterSpacing: 2 }}>{this.props.name}</Form.Label>
                <ProgressBar style={{ height: '25px' }} className="mb-2">
                    {this.renderProgressBar()}
                </ProgressBar>
                <Form.Control value={this.state.order} onChange={(e) => {this.setState({order: e.target.value}); this.props.updateOrder(parseInt(e.target.value))}} className="col-1" type="number" min="0" placeholder="0" />
            </Form.Group>

        )
    }
}

export default Supplier;