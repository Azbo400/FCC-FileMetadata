var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest:'uploads/'});

var port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.render('index');
});

app.post('/upload',upload.single('file'),function(req,res,next){
  res.send({"size":req.file.size});
}); 

app.listen(port,function(){
  console.log(`App listening on port ${port}`);
});