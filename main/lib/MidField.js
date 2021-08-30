const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Forward extends TeamMember, Captain {
    constructor(name, id, email, longestGoalScored, dualsWon) {
        super(name, id, email, experience);
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