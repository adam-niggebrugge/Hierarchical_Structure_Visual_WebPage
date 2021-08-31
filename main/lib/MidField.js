const Player = require("./Player");

class Midfield extends Player {
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