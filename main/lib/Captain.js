const ClubMember = require("./ClubMember");

class Captain extends ClubMember {

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
