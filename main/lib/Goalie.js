const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Goalie extends TeamMember, Captain {
    constructor(name, id, email, saves, verticalJump) {
        super(name, id, email, experience);
        this.saves = saves;
        this.verticalJump = verticalJump;
    }

    getPosition() {
        return "Goalie";
    }
    
    getSaves(){
        return this.saves;
    }

    getVerticalJump(){
        return this.verticalJump;
    }

}