
/**
 * Module dependencies.
 */
var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
//var path = require('path');
var app = express();

app.configure(function(){
	app.set('port',process.env.PORT||3000);
	app.set('views'),__dirname+'/views');
	app.set('view engine','jade');
//    app.set('view cache'),true);
//    app.ebale('view cache');
	app.use(express.bodyParser());
});



app.get('/',function(req,res) {

	res.send("Hello Express!");
});

app.get('/hi',function(req,res){
var message="<h1>hello there, how you doing today?</h1>";
res.send(message);

});

//app.get('/users/:userId',function(req,res){
//res.send("<h2>hello,user "+ req.params.userId+" </h2> !");
//});


//app.put /users/:userId
//app.delete /users/:userId

app.get(/\/users\/(\d*)\/?(edit)?/,function(req,res) {

	//users/456
	//users/456/
	//user/456/edit
var message="user "+req.params[0]+"'s profile";


if(req.params[1]==='edit'){

	message="Edditing "+req.params[1]+" "+message;
}
 else {

 	message=" Viewing" +message;
 }
 res.send(message);
});

app.post("/users",function(req,res){

res.send("Creating a new user with the name "+ req.body.username);

});

/*
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
