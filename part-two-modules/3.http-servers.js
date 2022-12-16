const http = require("http")
const url = require("url")

function basicServer() {
    http.createServer((req, res) => {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.write("Hello from HTTP server.")
        res.end()
    })
        .listen(8000)
}

function serverWithRoutes() {
    http.createServer((req, res) => {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        if(req.method == "GET") {
            res.write("Hello from... method = GET and ")

            if(req.url == "/greetings") {
                res.write("url = '/greetings'")
            }
            console.log("nknacsdnvxlxcnvxn ", req.originalUrl)
            // route with query
            if(req.url == "/hello") {
                const queryObject = url.parse(req.url, true).query
                console.log(queryObject)

                res.write("url = '/hello'")
            }

            return res.end()
        }

        res.write("Hello from HTTP server.")
        res.end()
    })
        .listen(8000)
}

serverWithRoutes()