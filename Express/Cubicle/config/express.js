const express = require('express');
const hbs = require('express-handlebars');

module.exports = (app) => {
    
    app.engine('hbs', hbs({
        extname: '.hbs'
    }));
    
    app.set('view engine', 'hbs');
    app.use('/static',express.static('static'));
    app.use(express.urlencoded({extended: false}));        

};