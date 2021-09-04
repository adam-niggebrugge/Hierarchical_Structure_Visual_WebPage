const Forward = require("../lib/Forward");
const ClubMember = require("../lib/ClubMember");

const cm = new ClubMember("foo", "foo@foo.com");

describe("Forward", () => {
    describe(" Initialization Check", () => {
        it("Can set scored goals via constructor", () => {
        const testValue = "100";
        const f = new Forward(1, "@test", cm, testValue);
        expect(f.scoredGoals).toBe(testValue);
        });
    }); 
        
    describe("getPosition()", () => {
        it("getPosition() should return \"Forward\"", () => {
        const testValue = "Forward";
        const f = new Forward(1, "@test", cm, 100);
        expect(f.getPosition()).toBe(testValue);
        });
    });
    
    describe("getGoals()", () => {
        it("Can get ScoredGoals via getGoals()", () => {
        const testValue = 100;
        const f = new Forward(1, "@test", cm, testValue);
        expect(f.getGoals()).toBe(testValue);
        });
    });
});


