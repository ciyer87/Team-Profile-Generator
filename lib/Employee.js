class Employee {
    constructor(employeeName, employeeID, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
        this.employeeRole = 'Employee';
    }

    getName(){
        return this.employeeName;
    } 

    getID() {
        return this.employeeID;
    }

    getEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return this.employeeRole;
    }
}


// function Employee(employeeName, employeeID, employeeEmail) {
//     this.employeeName = employeeName;
//     this.employeeID = employeeID;
//     this.employeeEmail = employeeEmail;
//   }
  
  module.exports = Employee;