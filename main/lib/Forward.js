const Captain = require("./Captain");

class Forward extends Captain {
    constructor(name, kitNumber, email, option1, option2) {
        //check if last parameter is given, if option2 has a value then it must be a captain type person with experience for option1 and scoredGoals for option2
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
