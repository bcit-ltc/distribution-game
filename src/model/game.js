import TurnHistory from "./turns.js";
import Supplier from "./supplier.js";
import Warehouse from "./warehouse.js";
import Retailer from "./retailer.js";
import Data from "./data.js"; // data placeholder

class Game {
    constructor(constructorProps = {}){
        this.currentTurn = constructorProps.currentTurn ? constructorProps.currentTurn : 0; // remember the "real" turn is this plus one because this is an index
        this.turnHistory = constructorProps.turnHistory ? constructorProps.turnHistory : new TurnHistory();
        this.locations = constructorProps.locations ? constructorProps.locations : new Map();
        this.minDemand = constructorProps.minDemand ? constructorProps.minDemand : [];
        this.maxDemand = constructorProps.maxDemand ? constructorProps.maxDemand : [];
        this.finalTurn = constructorProps.finalTurn ? constructorProps.finalTurn : 59;
        this.hasInitialized = false;
    }

    calcTotalsFromTurns(propertyName){
        let count = 0;
        this.turnHistory.turns.forEach(turn => {
            if(propertyName in turn){
                count += turn[propertyName];
            }else{
                console.error(`Property ${propertyName} not found in turns`);
                return false;
            }
        });
        return count;
    }

    get isGameOver(){
        return this.currentTurn >= this.finalTurn;
    }

    get totalSales(){
        return this.calcTotalsFromTurns("turnSales");
    }

    get totalCostOfGoods(){
        return this.calcTotalsFromTurns("turnCostOfGoods");
    }

    get totalGrossMargin(){
        return this.calcTotalsFromTurns("turnGrossMargin");
    }   

    get totalCarryingCost(){
        return this.calcTotalsFromTurns("turnCarryingCost");
    }

    get totalOrderCosts(){
        return this.calcTotalsFromTurns("turnOrderCost");
    }

    get totalOperatingProfit(){
        return this.calcTotalsFromTurns("turnOperatingProfit");
    }

    get averageDailyProfit(){
        if(this.totalOperatingProfit === 0) return 0;
        return this.totalOperatingProfit / (this.currentTurn + 1);
    }

    get averageFillRate(){
        if(this.currentTurn <= 0) return 100;
        const turns = this.turnHistory.turns;
        let fillRate = 0;
        turns.forEach(turn => {
            fillRate += turn.turnFillRate;
        });
        if(fillRate <= 0) return 0;

        return Math.round(fillRate / turns.length);
    }

    init(){
        // here we would put a proper data fetch, for now, we can just fetch from "Data.js"
        const gameLocations = Data.locationsGame1; // TODO: load appropriate game selected
        const demandArrays = Data.demandGame1;
        this.minDemand = demandArrays.minArray;
        this.maxDemand = demandArrays.maxArray;
        this.locations = gameLocations;

        // generate demand for the first turn (this should be 0 right now)
        this.locations.forEach((value, key) => {
            if(value instanceof Retailer){
                value.generateDemand(this.minDemand[this.currentTurn], this.maxDemand[this.currentTurn]);
            }
        });
        // store the current turn as the first turn in the turn history
        this.turnHistory.addTurn(this.locations);

        this.hasInitialized = true;
    }

    handleTurn(){
        if(!this.hasInitialized){
            console.error("Please ensure init has been run before handling turns with the Game object");
            return;
        }

        // first, we want deliverable locations (places with routes)
        // to deliver
        this.locations.forEach((value, key) => {
            if(value instanceof Supplier || value instanceof Warehouse){
                value.handleTurn();
            }
        });
        // now that possible deliveries are made, the store fronts can
        // run their turns
        this.locations.forEach((value, key) => {
            if(value instanceof Retailer){
                value.handleTurn();

                // ensure the updated demand is set now that the turn is handled
                value.generateDemand(this.minDemand[this.currentTurn + 1], this.maxDemand[this.currentTurn  + 1]);
            }
        });

        // finally, take a snapshot of the turn in the turn history
        // and then see if our game is over
        this.turnHistory.addTurn(this.locations);

        this.currentTurn++;

        if(this.isGameOver){
            // TODO: do endgame stuff
        }
    }

}

export default Game;