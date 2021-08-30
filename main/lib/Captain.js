const TeamMember = require("./TeamMember");

class Captain extends TeamMember {

  constructor(name, id, email, experience) {
    super(name, id, email);
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
