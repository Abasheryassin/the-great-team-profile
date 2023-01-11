const Employee = require("../lib/Employee");

describe("Creates employee profile", () => {
    it("Recives user input for name and saves it", () => {
        //arrange
        const input = "chris";
        const employee = new Employee(input);
        //act
        const output = employee.getName();
        
        //assert
        expect(output).toBe(input);
    });
    it("Recvies user input for id and saves it", () => {
        //arrange
        const input = "047";
        const employee = new Employee("",input);
        //act
        const output = employee.getId();

        //assert
        expect(output).toBe(input);
    });
    it("Recives user input for email and saves it", () => {
        //arrange
        const input = "somename@gmail.com";
        const employee = new Employee("","", input);
        //act
        const output = employee.getEmail();

        //assert
        expect(output).toBe(input);
    });
    it("Reutrns employee status", () => {
        //arrange
        const expected = "Employee";
        const employee = new Employee;
        //act
        const output = employee.getRole();
        //assert
        expect(output).toBe(expected);
    })
});