const Player = require("./Player");
const TeamMember = require("../lib/TeamMember");
const tm = new TeamMember("foo", "foo@foo.com");

class Forward extends Player {
    constructor(kitNumber, twitterhandle, tm, goals) {
        super(kitNumber, twitterhandle, tm);
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
