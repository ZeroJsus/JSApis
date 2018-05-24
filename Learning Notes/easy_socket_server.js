let http = require('http');
let server = http.createServer((request,response)=>{
	response.setHeader('Content-Type','text/html')
	response.end('hello world')
})
let socket = require('socket.io')(server)
socket.on('connection',function(client){
	client.on('event',function(data){
		console.log(data)
	})
	client.on('connect',function(){
		client.on('message',function(data){
			// client.send(data)
			console.log(data)
			client.broadcast.emit('push message',data);
		})
	})
	client.on('disconnect',function(){
		console.log('disconnect')
	})

})

server.listen(3001,function(){
	console.log('服务器已经开始运行')
})