var http=require('http');
var s=require('./usermodule');
const a=["c","cpp","java"];
const b=["node","html","css"];
http.createServer(function(req,res)
{
    res.writeHead(200,{ 'content-type':'text/html'});
    res.write("my name is : Parvathy Balachandran");
    res.write("<br>sum of no's ="+s.sum(10,5));
    res.write("<br>array cocatination ="+s.arr(a,b));
    res.end();
    
    
}).listen(8080);