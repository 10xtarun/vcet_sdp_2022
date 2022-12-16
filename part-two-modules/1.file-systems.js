const fs = require("fs")

function readSync() {
    console.log("First console.")

    const data = fs.readFileSync("./dummy.txt", {})
    console.log("data: ", data.toString())
    
    console.log("Second console.")
}

// readSync()

function readAsync() {
    console.log("First console.")

    fs.readFile("./dummy.txt", {}, (error, data) => {
        console.log("Second console.")

        console.log("error: ", error)
        console.log("data: ", data.toString())
    })
    
    console.log("Third console.")
}

// readAsync()

function writeSync() {
    const data = "Hello from write file result."
    fs.writeFileSync("result.txt", data)
}
// writeSync()

function writeAsync() {
    const data = "Hello from write file result."
    fs.writeFile("result.txt", data, (error) => {
        console.log("error: ", error)
    })
}
// writeAsync()