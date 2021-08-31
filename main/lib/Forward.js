const Player = require("./Player");

class Forward extends Player {
    constructor(kitNumber, twitterhandle, object, goals) {
        super(kitNumber, twitterhandle, object);
        this.scoredGoals = goals;
    }

    getPosition() {
        return "Forward";
    }
    
    getGoals(){
        return this.scoredGoals;
    }
}

module.exports = Forward;
