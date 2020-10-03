import React, { Component } from 'react';
import { Button, Table, Col, Toast, Row, Card, Dropdown } from 'react-bootstrap';
import AnimatedNumerical from '../components/AnimatedNumerical';

class ScoreCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                'sales': 0,
                'cost_GS': 0,
                'grossMargin': 0,
                'orderCost': 0,
                'inventoryCost': 0,
                'operatingProfit': 0,
                'netProfit': 0,
                'orderFillRate': 0
            },
            att: { 'costPrice': 70, 'salePrice': 100, 'retailerOrderCost': 200, 'supplierOrderCost': 100, 'labourCost': 15 , 'overheadCost': 10 }
        }
    }


    calculate_scorecard(numberofItems_Sold, numberofTrucks, inventory, demand) {
    console.log(inventory)
        this.setState({
            data: {
                ...this.state.data,
                cost_GS: this.calculateCostofGoodSales(numberofItems_Sold),
                sales: this.calculateSales(numberofItems_Sold),
                orderCost: this.calculateOrderCost(numberofTrucks.suppliersTruck, numberofTrucks.retailersTruck),
                inventoryCost: this.calculateInventoryCost(inventory.supplier, inventory.retailer),
                operatingProfit: this.calculateOperatingProfit(),
                orderFillRate: this.calculateOrderFillRate(numberofItems_Sold, demand)
                //grossMargin: this.sales - this.cost_GS,

            }
        })
    }

    calculateSales(numberofItems) {
        console.log("Calculating:" + numberofItems)
        let total = 0;

        total = numberofItems * this.state.att.salePrice + this.state.data.sales
        // this.setState({
        //     data: {
        //         ...this.state.data,
        //         sales: total
        //     }
        // })
        return total
    }

    calculateCostofGoodSales(numberofItems) {
        console.log("Calculating:" + numberofItems)
        let total = 0;

        total = numberofItems * this.state.att.costPrice + this.state.data.cost_GS

        return total
    }

    calculateOrderCost(supplierOrder, retailerOrder) {
        let total = 0;

        total = supplierOrder * this.state.att.supplierOrderCost + retailerOrder * this.state.att.retailerOrderCost + this.state.data.orderCost;

        return total
    }

    calculateInventoryCost( supplierInventory, retailInventory){

        let cost =  (supplierInventory * this.state.att.costPrice) * 0.21 +  (retailInventory * this.state.att.costPrice) * 0.25
    
        return this.state.data.inventoryCost + Math.round(cost/365)
    }

    calculateOperatingProfit() {
        return (this.state.data.sales - this.state.data.cost_GS )- (this.state.data.orderCost + this.state.data.inventoryCost )
    }

    calculateOrderFillRate(sales, demand){

        return (sales/demand) * 100
    }

    render() {
        console.log(this.state.data)
        return (
            <Table className="m-0 p-0 col-6 mx-auto col-lg-8 bg-light" style={{ fontSize: '12px' }}>
                <thead>
                    <tr className="text-center">
                        <th colSpan="4" style={{ fontSize: '18px', letterSpacing: 5 }}>ScoreCard</th>
                    </tr>
                    <tr className="text-center">
                        <th colSpan="2">Categories</th>

                        <th colSpan="2">To Date</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="3">Sales</td>

                        <td>$ {<AnimatedNumerical to={this.state.data.sales} from={this.state.data.sales} />}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Cost of Goods Sold</td>
                        <td colSpan="2">$ {<AnimatedNumerical to={this.state.data.cost_GS} from={this.state.data.cost_GS} />}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Gross Margin</td>
                        <td colSpan="2">$ {<AnimatedNumerical to={this.state.data.sales - this.state.data.cost_GS} from={this.state.data.sales - this.state.data.cost_GS} />}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Order Costs </td>
                        <td colSpan="2">$ {<AnimatedNumerical to={this.state.data.orderCost} from={this.state.data.orderCost} />}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Inventory Costs </td>
                        <td colSpan="2">$ {this.state.data.inventoryCost}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Operating Profit </td>
                        <td colSpan="2">$ {this.state.data.operatingProfit}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Net Profit </td>
                        <td colSpan="2">$0</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Order Fill Rate </td>
                        <td colSpan="2">20%</td>

                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ScoreCard;