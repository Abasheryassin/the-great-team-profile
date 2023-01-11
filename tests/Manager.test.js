const Manager = require('../lib/Manager');

describe("Add manager specific information", () => {
    it("reutns manager as the role", () => {
        const expected = "Manager"
        const manager = new Manager
        const output = manager.getRole();

        expect(output).toBe(expected);
    });
});