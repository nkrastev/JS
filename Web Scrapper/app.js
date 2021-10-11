//INSTALL npm i
//RUN npm run start

const PORT=8000;
const url="URL TO SCRAPE";
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

// if you run nodemon
const application=express()
application.listen(PORT, ()=> console.log("Server is running on selected port")); 

//scrapping based on dom element
let data=[];

axios(url)
    .then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
        $('.teamAmatch', html).each(function(){
            teamA.push($(this).text());
            console.log(data.length);
            console.log($(this).text())
        });
    
    //Call array printing or save data        
        
    }).catch(err=>console.log(err));

console.log('Printing results.........')   
console.log(data.length);



