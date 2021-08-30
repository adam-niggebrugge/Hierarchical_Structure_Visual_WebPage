class TeamMember {
    
  constructor(name, kitNumber, email) {
    this.name = name;
    this.kitNumber = kitNumber;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail(){
    return this.email;
  }

  getKitNumber() {
    return this.kitNumber;
  }

  getRole() {
    return "Club Member";
  }

}

module.exports = TeamMember;
