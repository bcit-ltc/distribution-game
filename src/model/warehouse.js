import Location from "./location.js";

/**
 * @summary Represents a warehouse location, which can both recieve and send goods, and has finite goods. This makes it 
 * more complicated to handled in game terms than a simple supplier.
 */
class Warehouse extends Location {

    constructor(constructorProps = {}){
        super(constructorProps);
        this.sources = constructorProps.sources ? constructorProps.sources : new Map(); // only used for convienient referencing
        this.deliveryRoutes = constructorProps.deliveryRoutes ? constructorProps.deliveryRoutes : new Map();
        this.carryingCost = constructorProps.carryingCost ? constructorProps.carryingCost : 0.2; // how much per good per turn it costs to "hold"
        this.currentStock = constructorProps.currentStock ? constructorProps.currentStock : 0; // how many goods currently
    }

    get inventoryHoldingCost() {
        return this.carryingCost * this.currentStock;
    }

    /**
     * @summary Used during turns (I.E. not currently handling a turn) to create new orders through a route. Will return an
     * enum based on success, failure, etc.
     * 
     * Note a warehouse, having finite stock, can fill a partial order.
     * 
     * @param {string} routeName Name of the route to call (the caller will need their own reference or to look through 
     * this object's deliveryRoutes to know the correct name)
     * @param {number} orderCount How many goods to order
     * 
     * @returns {Location.orderEnum} An enum representing the order state (so the caller can respond appropriately)
     */
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

    /**
     * @summary Called from its Game object to handle a turn
     */
    handleTurn(){
        // orders have been created in between turns, so now it's time to move them
        this.deliveryRoutes.forEach((value, key) => {
            value.handleTurn();
        });
    }

}

export default Warehouse