var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer({dest:'uploads/'});
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.render('index');
});

app.post('/',upload.any(),function(req,res,next){
  res.send({"size":req.size});
}); 

app.listen(port,function(){
  console.log(`App listening on port ${port}`);
});