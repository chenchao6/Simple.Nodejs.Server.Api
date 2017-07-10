const app = require('express')();
const http = require('http');
const httpServer = http.createServer(app);
var port=18080;
httpServer.listen(port,function(){
     console.log('HTTP Server is running on: http://localhost:%s', port);
})

// Welcome
app.get('/api/getUserInfo', function(req, res) {
 
    res.status(200).send({
        message:'你好'
    });
    
});