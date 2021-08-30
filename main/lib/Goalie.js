const Captain = require("./Captain");
const TeamMember = require("./TeamMember");

class Goalie extends TeamMember, Captain {
    constructor(name, kitNumber, email, experience, saves, verticalJump) {
        super(name, kitNumber, email, experience);
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