const Goalie = require("../lib/Goalie");
const ClubMember = require("../lib/ClubMember");

const cm = new ClubMember("foo", "foo@foo.com");

describe("Goalie", () => {
    describe("Initialization", () => {
        it("Can set saves via constructor", () => {
        const testValue = 100;
        const g = new Goalie(1, "testName", cm, testValue, 1);
        expect(g.saves).toBe(testValue);
        });
        it("Can set cleanSheets via constructor", () => {
            const testValue = 100;
            const g = new Goalie(1, "testName", cm, 1, testValue);
            expect(g.cleanSheets).toBe(testValue);
        });
    }); 

    describe("getPosition()", () => {
        it("getPosition() should return \"Goalie\"", () => {
        const testValue = "Goalie";
        const g = new Goalie(1, "testName", cm, 99);
        expect(g.getPosition()).toBe(testValue);
        });
    });
    
    describe("getSaves()", () => {
        it("Can get ScoredGoals via getSaves()", () => {
        const testValue = 100;
        const g = new Goalie(1, "testName", cm, testValue, 1);
        expect(g.getSaves()).toBe(testValue);
        });
    });

    describe("getCleanSheets()", () => {
        it("Can get ScoredGoals via getCleanSheets()", () => {
        const testValue = 100;
        const g = new Goalie(1, "testName", cm, 1, testValue);
        expect(g.getCleanSheets()).toBe(testValue);
        });
    });
});
