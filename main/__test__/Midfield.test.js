const Midfield = require("../lib/Midfield");
const TeamMember = require("../lib/TeamMember");

const tm = new TeamMember("foo", "foo@foo.com");

describe("Midfield", () => {
    describe("Initialization Check", () => {
        it("Can set longestGoalScored and return via constructor", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", tm, testValue, 1);
        expect(m.longestGoalScored).toBe(testValue);
        });
        it("Can set dualsWon and return via constructor", () => {
            const testValue = 100;
            const m = new Midfield(1, "sillyName", tm, 1, testValue);
            expect(m.dualsWon).toBe(testValue);
        });
    }); 
        
    describe("getPosition()", () => {
        it("getPosition() should return \"Midfield\"", () => {
        const testValue = "Midfield";
        const m = new Midfield(1, "sillyName", tm, 1, 1);
        expect(m.getPosition()).toBe(testValue);
        });
    });

    describe("getAverageHeaderAmt()", () => {
        it("Can get averageHeaderAmt via getAverageHeaderAmt()", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", tm, testValue, 1);
        expect(m.getAverageHeaderAmt()).toBe(testValue);
        });
    });

    describe("getBlocks()", () => {
        it("Can get ScoredGoals via getBlocks()", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", tm, 1, testValue);
        expect(m.getBlocks()).toBe(testValue);
        });
    });
});
