// simple function
function greetings(message) {
    console.log(message);
}

greetings("Hello World!")

// functions with parameters / arguments
function greetingsWithName(name, message) {
    console.log(message + name)
}

greetingsWithName("John", "hello from ")

// arrow functions
const greetingsV2 = () => {
    console.log("Hello World! from arrow function.")
}

greetingsV2()

// arrow function with arguments
const greetingsWithNameV2 = (name, message) => {
    console.log(name, message)
}

greetingsWithNameV2("John ", "Hello from Arrow function V2.")