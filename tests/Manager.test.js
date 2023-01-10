const Manager = require('../lib/Manager');

describe("Add manager specific information", () => {
    it("reutns manager as the role", () => {
        const expected = "Manager"

        const output = Manager.getRole();

        expect(output).toBe(expected);
    });
});