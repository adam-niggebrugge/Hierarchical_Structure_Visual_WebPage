const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Forward extends TeamMember, Captain {
    constructor(name, id, email, scoredGoals) {
        super(name, id, email, experience);
        this.scoredGoals = scoredGoals;
    }

    getPosition() {
        return "Forward";
    }
    
    getGoals(){
        return this.scoredGoals;
    }

}