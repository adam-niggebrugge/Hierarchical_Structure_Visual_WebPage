const Captain = require("./Captain");

class Forward extends Captain {
    constructor(name, kitNumber, email, option1, option2) {
        //check if last parameter is given, if option2 has a value then it must be a captain type person with experience for option1 and scoredGoals for option2
        if(typeof option2 !== 'undefined'){
            super(name, kitNumber, email, option1);
            this.scoredGoals = option2;
        } else {
            super(name, kitNumber, email);
            this.scoredGoals =  option1;
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
