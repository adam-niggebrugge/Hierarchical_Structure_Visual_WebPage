const Captain = require("../lib/Captain");

describe("Captain", () => {
  describe("Initialization", () => {
    it("Should set experience number via constructor argument", () => {
      const testValue = 100;
      const c = new Captain("Foo", "test@test.com", testValue);
      expect(c.experience).toBe(testValue);
    });
  });

  describe("getRole()", () => {
    it("should return \"Captain\"", () => {
      const testValue = "Captain";
      const c = new Captain("Foo", "test@test.com", 100);
      expect(c.getRole()).toBe(testValue);
    });
  });

  describe("getExperience()", () => {
    it("Can get experience number via getExperience()", () => {
      const testValue = 100;
      const c = new Captain("Foo", "test@test.com", testValue);
      expect(c.getExperience()).toBe(testValue);
    });
  });
});
