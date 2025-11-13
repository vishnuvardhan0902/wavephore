const exp = require('express');
const app = exp();
require('dotenv').config()
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log('server is running on', port)})