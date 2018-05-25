var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // 读取对应的index页面作为response
  // 或者使用res.end(string) 来返回一个字符串
  res.sendFile(__dirname + '/index.html');
});

// 存储当前在线的用户
var users = {}

io.on('connection', function(socket){
  // 检测用户是不是已经登陆
  socket.on('online',function(admin_name){
  	socket.name = admin_name
  	io.emit('online',admin_name)
  })
  console.log('a user connected');
  // socket.id 唯一可以识别的连接用户的id
  // console.log(io)
  // console.log(socket.id)
  // io.socket.clients 获取已经连接的所有用户的id
  // console.log(io.socket.clients)
  socket.on('chat message', function(msg){
  	console.log(msg)
  	io.emit('chat message', msg);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('offline',socket.name)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    