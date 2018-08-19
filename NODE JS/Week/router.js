module.exports = function(req, res){
    const PORT = 3000
    console.log(req.url)
    res.setHeader("content-Type","text/html")
    res.setHeader("content-Type","application/json")

    switch (req.url) {
        case '/hello': 
            res.write('hello')
            break;

        case '/hei': 
            res.write('hei')
            break;
        
        case '/goodnight': 
            res.write('goodnight')
             break;
        
        case '/chreol':
        res.write('chreol')
            break;

        case '/port':
        let json_1 = {
            port : PORT
        }
               
        res.write(JSON.stringify(json_1))
        
        default:
            break;
    }
    res.end();
        
}