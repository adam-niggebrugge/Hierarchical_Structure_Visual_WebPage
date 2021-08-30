const TeamMember = require("./TeamMember");

class Captain extends TeamMember {

  constructor(name, kitNumber, email, experience) {
    super(name, kitNumber, email);
    this.experience = experience;
  }

  getRole() {
    return "Captain";
  }

  getExperience() {
    return this.experience;
  }

}

module.exports = Captain;
