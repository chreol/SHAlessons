let http = require('http');

let httpHandler = require('./router')
const PORT = 3000

const server = http.createServer(httpHandler);

    // server()
        server.listen(PORT, console.log(
            `server is listening to the port ${PORT}`));