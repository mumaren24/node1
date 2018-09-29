
const http=require('http')
const server =http.createServer()
server.on('request',(req,res)=>{
    res.writeHeader(200, { 
        'Content-Type': 'text/plain; charset=utf-8'
    })
    res.end('啦啦')
})
server.listen(3001,function(){
    console.log('server runing at http://127.0.0.1:3001')
})