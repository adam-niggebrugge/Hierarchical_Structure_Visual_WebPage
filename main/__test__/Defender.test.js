const Defender = require("../lib/Defender");
const ClubMember = require("../lib/ClubMember");

const cm = new ClubMember("foo", "foo@foo.com");

describe("Defender", () => {
    describe("Initialization Check", () => {
        it("Can set aerialDualsWon via constructor", () => {
        const testValue = 100;
        const d = new Defender(1, "sillyName", cm, testValue, 1);
        expect(d.aerialDualsWon).toBe(testValue);
        });
        it("Can set blocks via constructor", () => {
            const testValue = 100;
            const d = new Defender(1, "sillyName", cm,  1, testValue);
            expect(d.blocks).toBe(testValue);
        });
    }); 
        
    describe("getPosition()", () => {
        it("getPosition() should return \"Defender\"", () => {
        const testValue = "Defender";
        const d = new Defender(1, "sillyName", cm, 1, 1);
        expect(d.getPosition()).toBe(testValue);
        });
    });

    describe("getAerialDualsWon()", () => {
        it("Can get Aerial Duals Won via getAerialDualsWon()", () => {
        const testValue = 100;
        const d = new Defender(1, "sillyName", cm, testValue, 1);
        expect(d.getAerialDualsWon()).toBe(testValue);
        });
    });

    describe("getBlocks()", () => {
        it("Can get ScoredGoals via getBlocks()", () => {
        const testValue = 100;
        const d = new Defender(1, "sillyName", cm,  1, testValue);
        expect(d.getBlocks()).toBe(testValue);
        });
    });
});
