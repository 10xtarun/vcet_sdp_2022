const http = require("http")

http.get('http://jsonplaceholder.typicode.com/users', res => {

    let data = []

    console.log("Status Code: ", res.statusCode)

    res.on("data", (chunk) => {
        data.push(chunk)
    })

    res.on("end", () => {
        console.log("Response ended.")

        const parsedDaat = JSON.parse(Buffer.concat(data).toString())

        console.log("Data: ", parsedDaat)
    })
})