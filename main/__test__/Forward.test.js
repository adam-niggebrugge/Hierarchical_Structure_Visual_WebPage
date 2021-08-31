const Forward = require("../lib/Forward");
const TeamMember = require("../lib/TeamMember");

const tm = new TeamMember("foo", "foo@foo.com");

describe("Forward", () => {
    describe("Initialization", () => {
        it("Can set scored goals via constructor", () => {
        const testValue = 100;
        const f = new Forward(1, "testName", tm, testValue);
        expect(f.scoredGoals).toBe(testValue);
        });
    }); 

    describe("getPosition()", () => {
        it("getPosition() should return \"Forward\"", () => {
        const testValue = "Forward";
        const f = new Forward(1, "testName", tm, 99);
        expect(f.getPosition()).toBe(testValue);
        });
    });
    
    describe("getGoals()", () => {
        it("Can get ScoredGoals via getGoals()", () => {
        const testValue = 100;
        const f = new Forward(1, "testName", tm, testValue);
        expect(f.getGoals()).toBe(testValue);
        });
    });
});
