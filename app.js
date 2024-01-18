const express = require('express');
const fs = require('fs');
const cors = require('cors');
const router = require('express').Router();
const app = express();
const port = process.env.PORT || 4000;
const db = require('./config/db.mongoconnection');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
  
app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    res.json("hello world!");
});

fs.readdirSync(__dirname + '/src/routes').forEach((file) => {
    if (file === 'app.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') {
        return;
    }
    let name = file.substr(0, file.lastIndexOf('.'));
    let routers = require('./src/routes/' + name)(app, router);
});

app.listen(port, function () {
    console.log(`listening on ${port} number`);
});
