import Transport from "./transport.js";

/**
 * @summary A route represents how a supplier or warehouse will deliver to their destinations (warehouses or retailers). 
 * This allows a single location to supply one or many other locations. 
 * A collection of Transports are kept in an array as orders are made and turns are handled
 */
class Route {

    constructor(constructorProps = {}){
        this.source = constructorProps.source ? constructorProps.source : null; // Location
        this.destination = constructorProps.destination ? constructorProps.destination : null; // Location
        this.turnsToDeliver = constructorProps.turnsToDeliver ? constructorProps.turnsToDeliver : 0; // How many turns it will take to deliver the goods
        this.routeOrderCost = constructorProps.routeOrderCost ? constructorProps.routeOrderCost : 0; // How much is charged when the delivery is made
        this.activeTransports = constructorProps.activeTransports ? constructorProps.activeTransports : []; // Currently active transports
        this.totalTransportsHistoricCount = constructorProps.totalTransportsHistoricCount ? constructorProps.totalTransportsHistoricCount : 0; // Only for record keeping
        this.currentOrderCosts = constructorProps.currentOrderCosts ? constructorProps.currentOrderCosts : 0; // used to record delivered order costs on a turn by turn basis
    }

    get routeName() {
        return `${this.source.locationName} to ${this.destination.locationName}`;
    }

    /**
     * @summary Used to add a new delivery (transport) to the route. Since there is only 1 delivery per turn,
     * if this is called more than once before a turn is handled, it simply replaces the load with a new count
     * 
     * @param {number} loadCount How much inventory to deliver
     */
    addNewDelivery(loadCount) {
        if(this.activeTransports.length > 0){
            const lastDeliveryTransport = this.activeTransports[this.activeTransports.length - 1];
            if(lastDeliveryTransport.turnsToDeliverRemaining >= this.turnsToDeliver){
                lastDeliveryTransport.loadCount = loadCount;
                return;
            }
        }
        this.totalTransportsHistoricCount++;
        const constructorProps = {
            transportName: `${this.routeName} Transport ${this.totalTransportsHistoricCount}`,
            loadCount: loadCount,
            deliveryRoute: this,
            turnsToDeliverRemaining: this.turnsToDeliver
        }
        const newTransport = new Transport(constructorProps);
        this.activeTransports.push(newTransport);
    }

    /**
     * @summary Usually called by a transport that has finished its delivery during a turn, removes the transport from the
     * activeTransports array
     * 
     * @param {Transport} finishedTransport the transport calling this method (or just a transport you want to get rid of)
     */
    finishedDelivery(finishedTransport){
        const indexOf = this.activeTransports.indexOf(finishedTransport);

        // on a delivered transport, record it as a delivered cost
        this.currentOrderCosts = this.routeOrderCost;

        if (indexOf > -1) {
           this.activeTransports.splice(indexOf, 1);
        }
    }

    /**
     * @summary Called from its Game object to handle a turn
     */
    handleTurn(){
        // reset ordercost in preparation of potentially no deliveries this turn
        this.currentOrderCosts = 0;

        this.activeTransports.forEach((transport, index) => {
            transport.handleTurn();
        });
    }

}

export default Route;