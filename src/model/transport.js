/**
 * Represents any means of transport for its route. During turns, travels to its destination until there, then 
 * delivers the goods.
 */
class Transport {

    constructor(constructorProps = {}){
        this.transportName = constructorProps.transportName ? constructorProps.transportName : "";
        this.loadCount = constructorProps.loadCount ? constructorProps.loadCount : 0;
        this.deliveryRoute = constructorProps.deliveryRoute ? constructorProps.deliveryRoute : null; // needs to be a Route object
        this.turnsToDeliverRemaining = constructorProps.turnsToDeliverRemaining ? constructorProps.turnsToDeliverRemaining : 0;
    }

    /**
     * @summary All a transport on a route has to do during a turn is see if it has
     * reached the destination, and if so, deliver the goods to the destination and
     * remove itself from the route
     */
    handleTurn() {
        this.turnsToDeliverRemaining--;
        if(this.turnsToDeliverRemaining <= 0){
            this.deliveryRoute.destination.addInventory(this.loadCount);
            this.deliveryRoute.finishedDelivery(this);
        }
    }
}

export default Transport;