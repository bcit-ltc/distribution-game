import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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
            orderFillRateArray: [],
            att: { 'costPrice': 70, 'salePrice': 100, 'retailerOrderCost': 200, 'supplierOrderCost': 100, 'labourCost': 15, 'overheadCost': 10 }
        }
    }


    calculate_scorecard(numberofItems_Sold, numberofTrucks, inventory, demand) {
        console.log(inventory)
        this.setState({
            data: {
                ...this.state.data,
                cost_GS: this.calculateCostofGoodSales(numberofItems_Sold.itemsSold),
                sales: this.calculateSales(numberofItems_Sold.itemsSold),
                orderCost: this.calculateOrderCost(numberofTrucks.suppliersTruck, numberofTrucks.retailersTruck),
                inventoryCost: this.calculateInventoryCost(inventory.supplier, inventory.retailer),
                operatingProfit: this.calculateOperatingProfit(this.calculateSales(numberofItems_Sold.itemsSold), this.calculateCostofGoodSales(numberofItems_Sold.itemsSold), this.calculateOrderCost(numberofTrucks.suppliersTruck, numberofTrucks.retailersTruck), this.calculateInventoryCost(inventory.supplier, inventory.retailer)),
                netProfit: this.calculatenetProfit(this.calculateOperatingProfit(this.calculateSales(numberofItems_Sold.itemsSold), this.calculateCostofGoodSales(numberofItems_Sold.itemsSold), this.calculateOrderCost(numberofTrucks.suppliersTruck, numberofTrucks.retailersTruck), this.calculateInventoryCost(inventory.supplier, inventory.retailer))),
                orderFillRate: this.calculateOrderFillRate(numberofItems_Sold.itemsSold, numberofItems_Sold.itemsOrder)
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

    calculateInventoryCost(supplierInventory, retailInventory) {

        let cost = (supplierInventory * this.state.att.costPrice) * 0.21 + (retailInventory * this.state.att.costPrice) * 0.25

        return this.state.data.inventoryCost + Math.round(cost / 365)
    }

    calculateOperatingProfit(sales, cost_gs, orderCost, inventoryCost) {

        return (sales - cost_gs) - (orderCost + inventoryCost)    
        //return (this.state.data.sales - this.state.data.cost_GS) - (this.state.data.orderCost + this.state.data.inventoryCost)
        
    }

    calculateOrderFillRate(sales, demand) {

        this.state.orderFillRateArray.push(Math.round((sales / demand) * 100));

        const sum = this.state.orderFillRateArray.reduce((a, b) => a + b, 0);
        const avg = (sum / this.state.orderFillRateArray.length) || 0;

        return Math.round(avg);


    }

    calculatenetProfit(operatingProfit) {

        let netProfit = 0;

        let numberOfLocations = this.props.warehouse ? 4 : 3;

        let operatingCost = (this.state.att.labourCost * numberOfLocations) + this.state.att.overheadCost;
        
        console.log('Days:' + this.props.days + '  OC: ' + operatingCost)

        let i = this.props.days + 1 * operatingCost

        netProfit = this.state.data.operatingProfit - i;

        return netProfit;
    }


    render() {

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
                <tbody >
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
                        <td colSpan="2">$ {this.state.data.netProfit}</td>

                    </tr>
                    <tr>
                        <td colSpan="2">Order Fill Rate </td>
                        <td colSpan="2">{this.state.data.orderFillRate}%</td>

                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ScoreCard;