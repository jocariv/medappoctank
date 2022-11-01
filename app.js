
const express = require('express')
const cors = require('cors')
const http=require('http')
var path = require('path');
const fs = require('fs')
var axios = require('axios');
const { send } = require('process');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port =process.env.Port || 8080;

const upload = multer();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(upload.none()); 

var publicPath = path.resolve(__dirname, 'public'); 
app.use(express.static(publicPath));

app.get('/', (req, res) => {

    
  res.sendFile(__dirname + '/public/login.html');

  

  /*var axios = require('axios');

  var data = JSON.stringify({
    "productId": "10003",
    "color": "red",
    "price": 1000
  });

  var config = {
    method: 'post',
    url: 'https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });*/




  
})

app.get('/admin',(req, res) =>{

      
  res.sendFile(__dirname + '/public/admin.html');
  
  app.post('/form',(req,res)=>{

    //console.log(res);
    //const nombre = req.body; // no se si era body o params así que hice los dos
    var data =JSON.stringify(req.body)/*JSON.stringify({
      "productId": "10003",
      "color": "red",
      "price": 1000
    });*/
  
    console.log(data);

    var config = {
      method: 'post',
      url: 'https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    

     //res.json({ data});

  })

  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
