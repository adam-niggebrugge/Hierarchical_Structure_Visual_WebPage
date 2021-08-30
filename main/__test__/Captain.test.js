const Captain = require("../lib/Captain");
const TeamMembers = require("../lib/TeamMember");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Captain("Foo", 1, "test@test.com", testValue);
  expect(e.experience).toBe(testValue);
});

test("getRole() should return \"Captain\"", () => {
  const testValue = "Captain";
  const e = new Captain("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Captain("Foo", 1, "test@test.com", testValue);
  expect(e.getExperience()).toBe(testValue);
});
