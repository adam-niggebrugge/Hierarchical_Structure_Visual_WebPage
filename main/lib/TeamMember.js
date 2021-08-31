class TeamMember {
  /**
   * Simple constructor for base functionality
   * @param {*} name  string
   * @param {*} email string verified on client side to be "chars"@"chars"."chars"
   */
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
