function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(people: string[]) {
    return people.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correctly handles the array of strings.

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); // Correctly handles single string