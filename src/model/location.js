/**
 * @summary a simple parent class for Locations to be "typed" as such, where common components can be put
 * All location types should inherit from this.
 */
class Location {

    constructor(constructorProps = {}){
        this.locationName = constructorProps.locationName ? constructorProps.locationName : "";
        this.locationType = constructorProps.locationType ? constructorProps.locationType : null;
    }

    static get locationTypeEnum(){
        return {
            SUPPLIER: 1,
            WAREHOUSE: 2,
            RETAILER: 4,
        };
    }

    static get orderEnum(){
        return {
            FAILED: 0,
            SUCCESS: 1,
            INSUFFICIENT_STOCK: 2,
            SHIPPING_SHUT_DOWN: 4
        }
    }

}

export default Location