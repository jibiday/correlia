var connect = require('connect'),
  serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("platforms/browser/www"))
app.listen(process.env.PORT || 5000);

app.get('/', function(req, res){
  res.sendfile("./index.html");
});
