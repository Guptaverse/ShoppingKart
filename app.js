const path = require('path');

const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

// const routes = require('./routes');

// const { rawListeners } = require('process');

// function rqListener(req,res){

// }

// http.createServer(rqListener);
// http.createServer(function(req,res){

// });
// app.use('/',(req,res,next)=>{
//     console.log('In the middleware');
//     next(); // allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});


app.listen(3000);