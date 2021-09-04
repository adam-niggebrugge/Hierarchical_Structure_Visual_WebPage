const Midfield = require("../lib/Midfield");
const ClubMember = require("../lib/ClubMember");

const cm = new ClubMember("foo", "foo@foo.com");

describe("Midfield", () => {
    describe("Initialization Check", () => {
        it("Can set longestGoalScored and return via constructor", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", cm, testValue, 1);
        expect(m.longestGoalScored).toBe(testValue);
        });
        it("Can set dualsWon and return via constructor", () => {
            const testValue = 100;
            const m = new Midfield(1, "sillyName", cm, 1, testValue);
            expect(m.dualsWon).toBe(testValue);
        });
    }); 
        
    describe("getPosition()", () => {
        it("getPosition() should return \"Midfield\"", () => {
        const testValue = "Midfield";
        const m = new Midfield(1, "sillyName", cm, 1, 1);
        expect(m.getPosition()).toBe(testValue);
        });
    });

    describe("getDualsWon()", () => {
        it("Can get the duals won value via getDualsWon()", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", cm, 1, testValue);
        expect(m.getDualsWon()).toBe(testValue);
        });
    });

    describe("getLongestGoalScored()", () => {
        it("Can get the longest goal scored value via getLongestGoalScored()", () => {
        const testValue = 100;
        const m = new Midfield(1, "sillyName", cm, testValue, 1);
        expect(m.getLongestGoalScored()).toBe(testValue);
        });
    });
});
