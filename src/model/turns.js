import Supplier from "./supplier.js";
import Warehouse from "./warehouse.js";
import Retailer from "./retailer.js";

import Route from "./route.js";
import Transport from "./transport.js";

class Turn {
    constructor(locations){
        this.locations = locations instanceof Map ? locations : new Map();
    }

    calcFromLocations(propertyName) {
        let count = 0;
        this.locations.forEach(location => {
            if(propertyName in location){
                count += location[propertyName];
            }
        });
        return count;
    }

    get turnSales(){
        return this.calcFromLocations("currentSales");
    }

    get turnCostOfGoods(){
        return this.calcFromLocations("currentCostOfGoods");
    }

    get turnGrossMargin(){
        return this.calcFromLocations("currentGrossMargin");
    }

    get turnCarryingCost(){
        return this.calcFromLocations("currentCarryingCost");
    }

    get turnOrderCost(){
        let orderCost = 0;
        this.locations.forEach(location => {
            if("deliveryRoutes" in location){
                location.deliveryRoutes.forEach(route => {
                    orderCost += route.currentOrderCosts;
                });
            }
        });
        return orderCost;
    }

    get turnOperatingProfit(){
        return this.turnGrossMargin - this.turnOrderCost - this.turnCarryingCost;
    }

    get turnFillRate(){
        let fillRate = 0;
        let retailerCount = 0;
        this.locations.forEach(location => {
            if("currentFillRate" in location){
                fillRate += location.currentFillRate;
                retailerCount++;
            }
        });

        if(retailerCount <= 0) return 100;
        if(fillRate <= 0) return 0;
        return Math.round(fillRate / retailerCount);
    }
}

class TurnHistory {
    constructor() {
        this.turns = [];
    }

    cloneRouteData(routes){
        let newRoutes = new Map();
        routes.forEach((route, name) => {
            const props = {};
            props.turnsToDeliver = route.turnsToDeliver;
            props.routeOrderCost = route.routeOrderCost;
            props.activeTransports = [];
            props.totalTransportsHistoricCount = route.totalTransportsHistoricCount;
            props.currentOrderCosts = route.currentOrderCosts;
            route.activeTransports.forEach(transport => {
                const transportProps = {};
                transportProps.transportName = transport.transportName;
                transportProps.loadCount = transport.loadCount;
                transportProps.turnsToDeliverRemaining = transport.turnsToDeliverRemaining;
                const newTransport = new Transport(transportProps);
                props.activeTransports.push(newTransport);
            });

            const newRoute = new Route(props);
            newRoutes.set(name, newRoute);
        });
        return newRoutes;
    }

    addTurn(turnLocations){
       // we need to clone the locations into a turn, removing the
       // circular references (we shouldn't need them to crunch
       // score card numbers) 
       const newLocations = new Map();
       turnLocations.forEach((location, name) => {
            const locationProps = {};
            locationProps.locationName = location.locationName;
            locationProps.locationType = location.locationType;

            let newLocation;
            if(location instanceof Supplier){
                locationProps.deliveryRoutes = this.cloneRouteData(location.deliveryRoutes);
                newLocation = new Supplier(locationProps);
            }
            if(location instanceof Warehouse){
                locationProps.deliveryRoutes = this.cloneRouteData(location.deliveryRoutes);
                locationProps.carryingCost = location.carryingCost;
                locationProps.currentStock = location.currentStock;
                newLocation = new Warehouse(locationProps);
            }
            if(location instanceof Retailer){
                locationProps.profitOfGoodsSold = location.profitOfGoodsSold;
                locationProps.costOfGoodsSold = location.costOfGoodsSold;
                locationProps.currentStock = location.currentStock;
                locationProps.currentDemand = location.currentDemand;
                locationProps.currentLostDemand = location.currentLostDemand;
                locationProps.currentItemsSold = location.currentItemsSold;
                locationProps.currentFillRate = location.currentFillRate;
                newLocation = new Retailer(locationProps);
            }

            newLocations.set(name, newLocation);
       });

       const newTurn = new Turn(newLocations);
       this.turns.push(newTurn);
    }

}

export default TurnHistory;