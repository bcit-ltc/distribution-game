import Location from "./location.js";

/**
 * @summary The most basic location, simply provides goods (which are infinite) to any destination
 * in its routes.
 */
class Supplier extends Location {

    constructor(constructorProps = {}){
        super(constructorProps);
        this.deliveryRoutes = constructorProps.deliveryRoutes ? constructorProps.deliveryRoutes : new Map();
    }

    /**
     * @summary Used during turns (I.E. not currently handling a turn) to create new orders through a route. Will return an
     * enum based on success, failure, etc
     * 
     * @param {string} routeName Name of the route to call (the caller will need their own reference or to look through 
     * this object's deliveryRoutes to know the correct name)
     * @param {number} orderCount How many goods to order
     * 
     * @returns {Location.orderEnum} An enum representing the order state (so the caller can respond appropriately)
     */
    createOrder(routeName, orderCount){
        const possibleRoute = this.deliveryRoutes.get(routeName);
        if(possibleRoute){
            // no supply concern from a supplier so just perform the order
            possibleRoute.addNewDelivery(orderCount);
        }else{
            console.error(`Could not find route ${routeName} to create order!`);
            return Location.orderEnum.FAILED;
        }

        return Location.orderEnum.SUCCESS;
    }

    /**
     * @summary Called from its Game object to handle a turn
     */
    handleTurn(){
        // simply have each route handle their turn (suppliers don't have
        // much to do themselves)
        this.deliveryRoutes.forEach((value, key) => {
            value.handleTurn();
        });
    }

}

export default Supplier