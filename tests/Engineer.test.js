const Engineer = require('../lib/Engineer');

describe("create engineer profile", () => {
    it("returns engineer as role", () => {
        const expected = 'engineer';

        const output = Engineer.getRole();

        expect(output).toBe(expected);
    })
})