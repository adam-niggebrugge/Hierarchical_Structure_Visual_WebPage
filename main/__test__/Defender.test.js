const Defender = require("../lib/Defender");

describe("Defender", () => {
    describe("Initialization Check", () => {
        it("Can set averageHeaderAmt via constructor for TeamMember", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", testValue, 1);
        expect(d.averageHeaderAmt).toBe(testValue);
        });
        it("Can set blocks via constructor for TeamMember", () => {
            const testValue = 100;
            const d = new Defender("Foo", 1, "test@test.com", 1, testValue);
            expect(d.blocks).toBe(testValue);
        });
    }); 
        

    describe("getPosition()", () => {
        it("getPosition() should return \"Defender\"", () => {
        const testValue = "Defender";
        const d = new Defender("Foo", 1, "test@test.com", 1, 1);
        expect(d.getPosition()).toBe(testValue);
        });
    });

    describe("getAverageHeaderAmt()", () => {
        it("Can get averageHeaderAmt via getAverageHeaderAmt()", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", testValue, 1);
        expect(d.getAverageHeaderAmt()).toBe(testValue);
        });
    });

    describe("getBlocks()", () => {
        it("Can get ScoredGoals via getBlocks()", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", 1, testValue);
        expect(d.getBlocks()).toBe(testValue);
        });
    });
});
