// f. Implement a small JavaScript program combining functions, arrays, and objects
// Array of Objects

let students = [
    { name: "Anas", marks: 85 },
    { name: "Ramiz", marks: 75 },
    { name: "kashif", marks: 92 }
];

// Function
function displayStudents(data) {
    data.forEach(student => {
        console.log(`${student.name} scored ${student.marks} marks`);
    });
}

displayStudents(students);

// Calculate Average
let average = students.reduce((sum, student) => sum + student.marks, 0) / students.length;

console.log(`Average Marks = ${average}`);