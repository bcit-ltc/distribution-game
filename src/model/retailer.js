import Location from "./location.js";

/**
 * @summary Represents a retail location in the game. The Game will set the demand per turn, and Transports will
 * delver goods when appropriate.
 */
class Retailer extends Location {

    constructor(constructorProps = {}){
        super(constructorProps);
        this.sources = constructorProps.sources ? constructorProps.sources : new Map(); // only used for ease of references
        this.profitOfGoodsSold = constructorProps.profitOfGoodsSold ? constructorProps.profitOfGoodsSold : 0; // how much a good sells for
        this.costOfGoodsSold = constructorProps.costOfGoodsSold ? constructorProps.costOfGoodsSold : 0; // how much a good costs (only when sold, see get property "currentCostOfGoods")
        this.currentStock = constructorProps.currentStock ? constructorProps.currentStock : 0; // how many goods there are
        this.currentDemand = constructorProps.currentDemand ? constructorProps.currentDemand : 0;
        this.currentLostDemand = constructorProps.currentLostDemand ? constructorProps.currentLostDemand : 0; // used to track when demand exceeded stock for the turn (see handleTurn)
        this.currentItemsSold = constructorProps.currentItemsSold ? constructorProps.currentItemsSold : 0; // used to track what the items sold were between turns (see handleTurn)
        this.currentFillRate = constructorProps.currentFillRate ? constructorProps.currentFillRate : 100; // a number from 0 to 100 to represet a fill rate. calulated during handleTurn
    }

    get inventoryHoldingCost() {
        return this.costOfGoodsSold * 0.0002; // TODO: unmagic?
    }

    get currentSales() {
        return this.currentItemsSold * this.profitOfGoodsSold;
    }

    get currentCostOfGoods() {
        return this.currentItemsSold * this.costOfGoodsSold;
    }

    get currentGrossMargin() {
        return this.currentSales - this.currentCostOfGoods;
    }

    get currentCarryingCost() {
        return this.currentStock * this.inventoryHoldingCost;
    }

    /**
     * @summary Called by the game during turns to create a new turn demand for this store
     * 
     * @param {number} min Lowest demand generated per turn
     * @param {number} max Highest demand generated per turn
     */
    generateDemand(min, max) {
        this.currentDemand = Math.floor(Math.random() * (max - min)) + min;
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
        // before doing turn stuff, reset the lost demand for the following
        // count
        this.currentLostDemand = 0;
        this.currentItemsSold = 0;

        // deliveries have been made so now it's time to check the demand
        // against the freshly stocked supply. any demand unmet will be
        // noted in the daily "lostDemand"
        if(this.currentStock >= this.currentDemand){
            this.currentStock -= this.currentDemand;
            this.currentItemsSold = this.currentDemand;
            this.currentFillRate = 100;
        }else{ // meaning we don't have enough for the full demand
            this.currentLostDemand = this.currentDemand - this.currentStock;
            this.currentItemsSold = this.currentDemand - this.currentLostDemand;
            if(this.currentItemsSold <= 0){ // ignoring the case of 0 or less demand because that shouldn't happen...
                this.currentFillRate = 0;
            }else{
                this.currentFillRate = Math.round((this.currentItemsSold / this.currentDemand) * 100);
            }
            this.currentStock = 0;
        }
    }

}

export default Retailer