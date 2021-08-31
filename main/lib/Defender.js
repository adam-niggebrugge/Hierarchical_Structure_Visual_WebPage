const Player = require("./Player");
const TeamMember = require("../lib/TeamMember");
const tm = new TeamMember("foo", "foo@foo.com");


class Defender extends Player {
    constructor(kitnumber, twitterhandle, tm, averageHeaderAmt, blocks) {
        super(kitnumber, twitterhandle, tm);
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