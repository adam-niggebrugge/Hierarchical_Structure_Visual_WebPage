const Player = require("./Player");

class Defender extends Player {
    constructor(kitnumber, twitterhandle, object, averageHeaderAmt, blocks) {
        super(kitnumber, twitterhandle, object);
        this.averageHeaderAmt = averageHeaderAmt;
        this.blocks = blocks;
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