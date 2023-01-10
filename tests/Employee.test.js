const Employee = require('../lib/Employee');

describe("Creates employee profile", () => {
    it("Recives user input for name and saves it", () => {
        //arrange
        const input = "chris";

        //act
        const output = Employee.getName(input);
        
        //assert
        expect(output).toBe(input);
    });
    it("Recvies user input for id and saves it", () => {
        //arrange
        const input = "047";

        //act
        const output = Employee.getId(input);

        //assert
        expect(output).toBe(input);
    });
    it("Recives user input for email and saves it", () => {
        //arrange
        const input = "somename@gmail.com";

        //act
        const output = Employee.getEmail(input);

        //assert
        expect(output).toBe(input);
    });
    it("Reutrns employee status", () => {
        //arrange
        const expected = "employee";
        //act
        const output = Employee.getRole();
        //assert
        expect(output).toBe(expected);
    })
});