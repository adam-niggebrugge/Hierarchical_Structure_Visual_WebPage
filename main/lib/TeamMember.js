class TeamMember {
    
  constructor(name, kitNumber, rallyCry, position, email) {
    this.name = name;
    this.kitNumber = kitNumber;
    this.rallyCry = rallyCry;
    this.position = position;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getKitNumber() {
    return this.kitNumber;
  }

  getRallyCry() {
    return this.rallyCry;
  }

  getRole() {
    return "TeamMember";
  }

}

module.exports = TeamMember;
