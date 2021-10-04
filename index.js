const express = require('express');
const userRoutes = require('./routes/users.routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/users',userRoutes);

app.listen(5000,console.log('server is running..'))