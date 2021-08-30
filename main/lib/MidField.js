const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Midfield extends TeamMember, Captain {
    constructor(name, kitNumber, email, experience, longestGoalScored, dualsWon) {
        super(name, kitNumber, email, experience);
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