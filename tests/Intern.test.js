const Intern = require('../lib/Intern');

describe("Return information about an Intern", () => {
    it("returns engineer as role", () => {
        const expected = 'Intern';

        const output = Intern.getRole();

        expect(output).toBe(expected);
    });
    it("returns school", () => {
        const expected = "school name"

        const output = Intern.getSchool(expected);

        expect(output).toBe(expected);
    });
})