const Engineer = require('../lib/Engineer');

describe("create engineer profile", () => {
    it("returns engineer as role", () => {
        const expected = 'Engineer';
        const engineer = new Engineer;
        
        const output = engineer.getRole();
        
        expect(output).toBe(expected);
    });
    it("Returns Github", () => {
        const expected = "githubName";
        const engineer = new Engineer("","","",expected);
        
        const output = engineer.getGithub();

        expect(output).toBe(expected);
    });
})