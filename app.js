const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended : false}));

app.set('views','./views');
app.set('view engine','ejs');

const route = require('./controller/userroute');
app.use(route); 

app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})