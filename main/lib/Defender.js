const Captain = require("./Captain");

class Defender extends Captain {
    constructor(name, id, email, option1, option2, option3) {
        //check if last parameter is given, if option3 has a value then it must be a captain type person
        if(typeof option3 !== 'undefined') {
            super(name, id, email, option1);
            this.averageHeaderAmt = option2;
            this.blocks = option3;
        } else {
            super(name, id, email);
            this.averageHeaderAmt = option1;
            this.blocks = option2;
        }
    }

    getPosition() {
        return "Defender";
    }
    
    getAverageHeaderAmt(){
        return this.averageHeaderAmt;
    }

    getBlocks(){
        return this.blocks;
    }
}

module.exports = Defender;