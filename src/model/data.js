import Supplier from "./supplier.js";
import Warehouse from "./warehouse.js";
import Retailer from "./retailer.js";

import Route from "./route.js";
import Transport from "./transport.js";

class Data {

    // demand should definitely be fetching from a json somewhere
    static get demandGame1(){

        let demand = {};
        demand.minArray = [];
        demand.maxArray = [];

        for(let i = 0; i <= 15; i++){
            demand.minArray.push(1);
            demand.maxArray.push(5);
        }

        for(let i = 16; i <= 25; i++){
            demand.minArray.push(6);
            demand.maxArray.push(15);
        }

        for(let i = 26; i <= 59; i++){
            demand.minArray.push(1);
            demand.maxArray.push(5);
        }

        return demand;
    }

    static get locationsGame1(){
        const locations = new Map();
        const supplier = "Seattle";
        const destination1 = "Richmond";
        const destination2 = "Vancouver";
        const destination3 = "Burnaby";

        // locations
        locations.set(supplier, new Supplier({
            locationName : supplier
        }));
        locations.set(destination1, new Retailer({
            locationName : destination1,
            sources : new Map([
                [ supplier , locations.get(supplier) ]
            ]),
            profitOfGoodsSold : 100,
            costOfGoodsSold : 70,
            currentStock : 45
        }));
        locations.set(destination2, new Retailer({
            locationName : destination2,
            sources : new Map([
                [ supplier , locations.get(supplier) ]
            ]),
            profitOfGoodsSold : 100,
            costOfGoodsSold : 70,
            currentStock : 45
            
        }));
        locations.set(destination3, new Retailer({
            locationName : destination3,
            sources : new Map([
                [ supplier , locations.get(supplier) ]
            ]),
            profitOfGoodsSold : 100,
            costOfGoodsSold : 70,
            currentStock : 45
        }));

        const routeSupplyToDestination1 = new Route({
            source : locations.get(supplier),
            destination : locations.get(destination1),
            turnsToDeliver : 20,
            routeOrderCost : 200,
        });
        const routeSupplyToDestination2 = new Route({
            source : locations.get(supplier),
            destination : locations.get(destination2),
            turnsToDeliver : 20,
            routeOrderCost : 200,
        });
        const routeSupplyToDestination3 = new Route({
            source : locations.get(supplier),
            destination : locations.get(destination3),
            turnsToDeliver : 20,
            routeOrderCost : 200,
        });

        // setting delivery routes
        locations.get(supplier).deliveryRoutes.set(
            routeSupplyToDestination1.routeName, 
            routeSupplyToDestination1
        );
        locations.get(supplier).deliveryRoutes.set(
            routeSupplyToDestination2.routeName, 
            routeSupplyToDestination2
        );
        locations.get(supplier).deliveryRoutes.set(
            routeSupplyToDestination3.routeName, 
            routeSupplyToDestination3
        );
        
        return locations;
    }
}

export default Data;