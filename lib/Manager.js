
const Employee = require('./Employee');
class Manager extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        super(employeeName, employeeID, employeeEmail);
        this.officeNumber = officeNumber;
        this.employeeRole = 'Manager';

    } 

    getOfficeNumber(){
        return this.officeNumber;
    } 

    getRole() {
        return this.employeeRole;
    }
}       




// function Manager(employeeName, employeeID, employeeEmail, officeNumber) {
//     this.employeeName = employeeName;
//     this.employeeID = employeeID;
//     this.employeeEmail = employeeEmail;
//     this.officeNumber = officeNumber;
//   }
  
  module.exports = Manager;