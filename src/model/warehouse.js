import Location from "./location.js";

class Warehouse extends Location {

    constructor(constructorProps = {}){
        super(constructorProps);
        this.sources = constructorProps.sources ? constructorProps.sources : new Map();
        this.deliveryRoutes = constructorProps.deliveryRoutes ? constructorProps.deliveryRoutes : new Map();
        this.carryingCost = constructorProps.carryingCost ? constructorProps.carryingCost : 0.2;
        this.currentStock = constructorProps.currentStock ? constructorProps.currentStock : 0;
    }

    get inventoryHoldingCost() {
        return this.carryingCost * this.currentStock;
    }

    createOrder(route, orderCount){
        const possibleRoute = this.deliveryRoutes.get(route);
        if(possibleRoute){
            // if there's not enough supply, just make the order
            // with whatever is in stock, or not at all if no stock
            // (no empty transports)
            if(this.currentStock <= 0){
                console.error(`No stock to make delivery on route ${route}`);
                return Location.orderEnum.FAILED; // TODO: make a specific enum for this?
            }else if(this.currentStock < orderCount){
                possibleRoute.addNewDelivery(this.currentStock);
                this.currentStock = 0;
                return Location.orderEnum.INSUFFICIENT_STOCK;
            }
            this.currentStock -= orderCount;
            possibleRoute.addNewDelivery(orderCount);
        }else{
            console.error(`Could not find route ${route} to create order!`);
            return Location.orderEnum.FAILED;
        }

        return Location.orderEnum.SUCCESS;
    }

    /**
     * @summary Called by a delivering transport to add to the current stock
     * 
     * @param {number} loadCount how much to add to current stock
     */
    addInventory(loadCount){
        this.currentStock += loadCount;
    }

    handleTurn(){
        // orders have been created in between turns, so now it's time to move them
        this.deliveryRoutes.forEach((value, key) => {
            value.handleTurn();
        });
    }

}

export default Warehouse