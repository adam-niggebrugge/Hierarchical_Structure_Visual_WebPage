const ClubMember = require("../lib/ClubMember");

describe("ClubMember", () => {
  describe("Initialization", () => {
    it("Should set name number via constructor argument", () => {
      const testValue = "Foo McFaceFoo";
      const cm = new ClubMember(testValue, "test@test.com");
      expect(cm.name).toBe(testValue);
    });
    it("Should set email number via constructor argument", () => {
        const testValue = "test@test.com";
        const cm = new ClubMember("Foo", testValue);
        expect(cm.email).toBe(testValue);
      });
  });

  describe("getRole()", () => {
    it("should return \"Club Member\"", () => {
      const testValue = "Club Member";
      const cm = new ClubMember("Foo", "test@test.com");
      expect(cm.getRole()).toBe(testValue);
    });
  });

  describe("getEmail()", () => {
    it("Can get experience number via getEmail()", () => {
      const testValue = "test@test.com";
      const cm = new ClubMember("Foo", testValue);
      expect(cm.getEmail()).toBe(testValue);
    });
  });

  describe("getName()", () => {
    it("Can get experience number via getName()", () => {
      const testValue = "Foo";
      const tm = new ClubMember(testValue, "test@test.com");
      expect(tm.getName()).toBe(testValue);
    });
  });
});
