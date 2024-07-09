const express=require('express');
const roomRoute=require('./routes/room')
const bodyparser=require('body-parser');
const sequelize=require('./db/config');
const app=express();
var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
app.use('/api',roomRoute);

sequelize.sync()
.then(()=>console.log('db connected'))
.catch(err=>console.log(err,'sss'));

const port=3000;
app.listen(port,()=> console.log(`server started on port ${port}`));
