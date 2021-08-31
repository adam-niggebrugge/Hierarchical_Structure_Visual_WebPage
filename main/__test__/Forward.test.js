const Forward = require("../lib/Forward");

describe("Forward", () => {
    describe(" TeamMemberInitialization", () => {
        it("Can set scored goals via constructor for TeamMember", () => {
        const testValue = "100";
        const f = new Forward("Foo", 1, "test@test.com", testValue);
        expect(f.scoredGoals).toBe(testValue);
        });
    }); 
        
    describe("Captain Initialization", () => {
        it("Can set scored goals via constructor for Captain", () => {
            const testValue = "100";
            const f = new Forward("Foo", 1, "test@test.com", 1, testValue);
            expect(f.scoredGoals).toBe(testValue);
        });
    });

    describe("getPosition()", () => {
        it("getPosition() should return \"Forward\"", () => {
        const testValue = "Forward";
        const f = new Forward("Foo", 1, "test@test.com", "Forward");
        expect(f.getPosition()).toBe(testValue);
        });
    });
    
    describe("getGoals()", () => {
        it("Can get ScoredGoals via getGoals()", () => {
        const testValue = "GitHubUser";
        const f = new Forward("Foo", 1, "test@test.com", testValue);
        expect(f.getGoals()).toBe(testValue);
        });
    });
});
