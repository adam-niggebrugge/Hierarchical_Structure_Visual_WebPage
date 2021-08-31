const TeamMember = require("./TeamMember");

class Captain extends TeamMember {

  constructor(name, email, experience) {
    super(name, email);
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
