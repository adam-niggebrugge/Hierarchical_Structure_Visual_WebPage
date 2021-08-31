class TeamMember {
    
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail(){
    return this.email;
  }

  getRole() {
    return "Club Member";
  }

}

module.exports = TeamMember;
