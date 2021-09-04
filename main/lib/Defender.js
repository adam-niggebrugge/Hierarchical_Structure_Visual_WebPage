const Player = require("./Player");

class Defender extends Player {
    constructor(kitnumber, twitterhandle, object, aerialDualsWon, blocks) {
        super(kitnumber, twitterhandle, object);
        this.aerialDualsWon = aerialDualsWon;
        this.blocks = blocks;
    }

    getPosition() {
        return "Defender";
    }
    
    getAerialDualsWon(){
        return this.aerialDualsWon;
    }

    getBlocks(){
        return this.blocks;
    }
}

module.exports = Defender;