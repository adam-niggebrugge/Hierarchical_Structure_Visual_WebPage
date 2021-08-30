const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Forward extends TeamMember, Captain {
    constructor(name, kitNumber, email, experience, scoredGoals) {
        super(name, kitNumber, email, experience);
        this.scoredGoals = scoredGoals;
    }

    getPosition() {
        return "Forward";
    }
    
    getGoals(){
        return this.scoredGoals;
    }

}