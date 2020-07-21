import Location from "./location.js";

class Supplier extends Location {

    constructor(constructorProps = {}){
        super(constructorProps);
        this.deliveryRoutes = constructorProps.deliveryRoutes ? constructorProps.deliveryRoutes : new Map();

    }

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

    handleTurn(){
        // simply have each route handle their turn (suppliers don't have
        // much to do themselves)
        this.deliveryRoutes.forEach((value, key) => {
            value.handleTurn();
        });
    }

}

export default Supplier