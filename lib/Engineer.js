// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    };
    getGithub() {
        console.log(`GitHub: ${this.githubUsername}`);
    };

    getRole() {
        console.log("Role: 'Engineer'");
    };
};

// const bill = new Engineer("Bill", 2, "bill@email.com", "billygoat");
// console.log(bill);
// bill.getGithub();
// bill.getRole();

