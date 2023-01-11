const Intern = require('../lib/Intern');

describe("Return information about an Intern", () => {
    it("returns engineer as role", () => {
        const expected = 'Intern';
        const intern = new Intern;
        const output = intern.getRole();

        expect(output).toBe(expected);
    });
    it("returns school", () => {
        const expected = "school name"
        const intern = new Intern("","","",expected);

        const output = intern.getSchool();

        expect(output).toBe(expected);
    });
})