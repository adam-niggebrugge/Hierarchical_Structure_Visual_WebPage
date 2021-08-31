const Defender = require("../lib/Defender");

describe("Defender", () => {
    describe("TeamMember Initialization", () => {
        it("Can set averageHeaderAmt via constructor for TeamMember", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", testValue, 1);
        expect(d.averageHeaderAmt).toBe(testValue);
        });
        it("Can show the correct role as a Club Member", () => {
            const testValue = "Club Member";
            const d = new Defender("Foo", 1, "test@test.com", 1, 1);
            expect(d.getRole()).toBe(testValue);
        });
    }); 
        
    describe("TeamMember Initialization", () => {
        it("Can set blocks via constructor for TeamMember", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", 1, testValue);
        expect(d.blocks).toBe(testValue);
        });
    }); 
    
    describe("Captain Initialization", () => {
        it("Can set averageHeaderAmt via constructor for Captain", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", testValue, 1);
        expect(d.averageHeaderAmt).toBe(testValue);
        });
    }); 
            
    describe("Captain Initialization", () => {
        it("Can set blocks via constructor for Captain", () => {
        const testValue = 100;
        const d = new Defender("Foo", 1, "test@test.com", 1, testValue);
        expect(d.blocks).toBe(testValue);
        });
    }); 
    
    describe("getPosition()", () => {
        it("getPosition() should return \"Defender\"", () => {
        const testValue = "Defender";
        const d = new Defender("Foo", 1, "test@test.com", );
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
        const testValue = "GitHubUser";
        const d = new Defender("Foo", 1, "test@test.com", testValue);
        expect(d.getBlocks()).toBe(testValue);
        });
    });
});
