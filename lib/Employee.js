class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        //Write code
        return this.name;
    }
    getId(){
        //write code
        return this.id;
    }
    getEmail(){
        //write code
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;