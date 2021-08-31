const Player = require('./Player');

class Goalie extends Player {
    /**
     * 
     * @param {*} kitNumber  expect postive number
     * @param {*} twitterHandle expect string starting with @
     * @param {*} object expecting either teamMember or captain object
     * @param {*} saves expecting postive number
     * @param {*} cleanSheets expecting postive number
     */
    constructor(kitNumber, twitterHandle, object, saves, cleanSheets) {
        super(kitNumber, twitterHandle, object);
        this.saves = saves;
        this.cleanSheets = cleanSheets;
    }

    getPosition() {
        return "Goalie";
    }
    
    getSaves(){
        return this.saves;
    }

    getCleanSheets(){
        return this.cleanSheets;
    }

}

module.exports = Goalie; 
