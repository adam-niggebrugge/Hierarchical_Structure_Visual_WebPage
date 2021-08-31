class Player {
    /**
     * simple constructor for player
     * @param {*} kitNumber expect number
     * @param {*} twitterHandle expect string
     * @param {*} object expect either TeamMember or Captain object
     */
    constructor(kitNumber, twitterHandle, object) {
      this.kitNumber = kitNumber;
      this.twitterHandle = twitterHandle;
      this.character = object;
    }
  
    getCharacter(){
        return this.character;
    }

    getTwitterHandle() {
        return this.twitterHandle;
    }

    getKitNumber() {
        return this.kitNumber;
    }
}
module.exports = Player;
