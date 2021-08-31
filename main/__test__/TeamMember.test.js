const TeamMember = require("../lib/TeamMember");

describe("TeamMember", () => {
  describe("Initialization", () => {
    it("Should set name number via constructor argument", () => {
      const testValue = "Foo McFaceFoo";
      const tm = new TeamMember(testValue, "test@test.com");
      expect(tm.name).toBe(testValue);
    });
    it("Should set email number via constructor argument", () => {
        const testValue = "test@test.com";
        const tm = new TeamMember("Foo", testValue);
        expect(tm.email).toBe(testValue);
      });
  });

  describe("getRole()", () => {
    it("should return \"Club Member\"", () => {
      const testValue = "Club Member";
      const tm = new TeamMember("Foo", "test@test.com");
      expect(tm.getRole()).toBe(testValue);
    });
  });

  describe("getEmail()", () => {
    it("Can get experience number via getEmail()", () => {
      const testValue = "test@test.com";
      const tm = new TeamMember("Foo", testValue);
      expect(tm.getEmail()).toBe(testValue);
    });
  });

  describe("getName()", () => {
    it("Can get experience number via getName()", () => {
      const testValue = "Foo";
      const tm = new TeamMember(testValue, "test@test.com");
      expect(tm.getName()).toBe(testValue);
    });
  });
});
