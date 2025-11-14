const exp = require('express');
const app = exp();
require('dotenv').config()
const port = process.env.PORT || 5000;
app.get('/api', (req, res)=>{
    console.log('hello ssr this is babu')
})
app.listen(port, ()=>{console.log('server is running on', port)})