// e. Create a program that manipulates objects and displays output
let employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 35000
};

employee.salary = 40000;
employee.city = "Mumbai";

console.log("Employee Details");
console.log(employee);

delete employee.department;

console.log("\nAfter Deleting Department");
console.log(employee);