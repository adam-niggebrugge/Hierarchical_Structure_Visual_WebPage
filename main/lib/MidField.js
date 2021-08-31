const Player = require("./Player");

class Midfield extends Player {
    /**
     * 
     * @param {*} kitNumber expect postive number
     * @param {*} twitterhandle expect string starting with @
     * @param {*} object expecting either teamMember or captain object
     * @param {*} longestGoalScored expecting postive number
     * @param {*} dualsWon expecting postive number
     */
    constructor(kitNumber, twitterhandle, object, longestGoalScored, dualsWon) {
        super(kitNumber, twitterhandle, object);
        this.longestGoalScored = longestGoalScored;
        this.dualsWon = dualsWon;
    }

    getPosition() {
        return "Midfield";
    }
    
    getDualsWon(){
        return this.dualsWon;
    }

    getLongestGoalScored(){
        return this.longestGoalScored;
    }
}

module.exports = Midfield; 