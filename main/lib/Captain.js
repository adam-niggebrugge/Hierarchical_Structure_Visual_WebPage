const TeamMember = require("./TeamMember");

class Captain extends TeamMember {

  constructor(name, id, email, level) {
    super(name, id, email);
    this.level = level;
  }

  getRole() {
    return "Captain";
  }

  getLevel() {
    return this.level;
  }

}

module.exports = Captain;
