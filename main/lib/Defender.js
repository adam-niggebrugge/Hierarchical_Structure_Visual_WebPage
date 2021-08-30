const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Defender extends TeamMember, Captain {
    constructor(name, id, email, experience, averageHeaderAmt, blocks) {
        super(name, id, email, experience);
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