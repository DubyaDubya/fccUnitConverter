const convert = require('./conversion');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('welcome to the homepage. do an input puhleeze ;)')
})
app.get('/api/convert', (req, res) =>{
    res.send(convert(req.query.input));
})
app.listen(8000, () =>{
    console.log("app is connected");
})