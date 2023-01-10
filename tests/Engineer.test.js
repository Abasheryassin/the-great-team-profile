const Engineer = require('../lib/Engineer');

describe("create engineer profile", () => {
    it("returns engineer as role", () => {
        const expected = 'Engineer';

        const output = Engineer.getRole();

        expect(output).toBe(expected);
    });
    it("Returns Github", () => {
        const expected = "githubName";

        const output = Engineer.getGithub(expected);

        expect(output).toBe(expected);
    });
})