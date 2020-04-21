const http =require('http');
const express =require('express')
const bodyParser = require('body-parser')
const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');

app=express();
app.use(bodyParser.json());

app.use('/disches',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
 
app.listen(3000);
