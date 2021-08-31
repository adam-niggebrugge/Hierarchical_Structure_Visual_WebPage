const Captain = require("./Captain");

class Forward extends Captain {
    constructor(name, kitNumber, email, experience, scoredGoals) {
        //check if last two parameters are given, if scoredGoals has a value then it must be a captain type person
        if(typeof scoredGoals !== 'undefined'){
            super(name, kitNumber, email, experience);
            this.scoredGoals = scoredGoals;
        } else {
            super(name, kitNumber, email);
            this.scoredGoals =  experience;
        } 
    }

    getPosition() {
        return "Forward";
    }
    
    getGoals(){
        return this.scoredGoals;
    }
}

module.exports = Forward;
