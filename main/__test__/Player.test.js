const Player = require("../lib/Player");
const Captain = require("../lib/Captain");
const ClubMember = require("../lib/ClubMember");

const cm = new ClubMember("foo", "foo@foo.com");
const c = new Captain("oldfoo", "oldfoo@foo.com", 99);

describe("Player", () => {
    describe("PlayerInitialization", () => {
        it("Can set kit number via constructor for Player with ClubMember object", () => {
        const testValue = 99;
        const p = new Player(testValue, "test", cm);
        expect(p.kitNumber).toBe(testValue);
        });
        it("Can set twitterHandle via constructor for Player with Captain object", () => {
            const testValue = "testName";
            const p = new Player(99, testValue, c);
            expect(p.twitterHandle).toBe(testValue);
        });
        it("Can show the correct role as a Club Member", () => {
            const testValue = "Club Member";
            const p = new Player(1, "test", cm);
            expect(p.getCharacter().getRole()).toBe(testValue);
        });
        it("Can show the correct role as a Captain", () => {
            const testValue = "Captain";
            const p = new Player(1, "test", c);
            expect(p.getCharacter().getRole()).toBe(testValue);
        });
    });

    
    describe("getTwitterHandle()", () => {
        it("Can get ScoredGoals via getTwitterHandle()", () => {
        const testValue = "testName";
        const p = new Player(1, testValue, c);
        expect(p.getTwitterHandle()).toBe(testValue);
        });
    });

    describe("getKitNumber()", () => {
        it("Can get ScoredGoals via getKitNumber()", () => {
        const testValue = 99;
        const p = new Player(testValue, "testName", cm);
        expect(p.getKitNumber()).toBe(testValue);
        });
    });
});
