class TeamMember {
    
  constructor(name, id, rallyCry) {
    this.name = name;
    this.id = id;
    this.rallyCry = rallyCry;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getRallyCry() {
    return this.rallyCry;
  }

  getRole() {
    return "TeamMember";
  }

}

module.exports = TeamMember;
