const mongoose = require('mongoose');


module.exports = async (app) =>{

    return new Promise((resolve, reject)=>{
        mongoose.connect('mongodb://localhost:27017/cubicle', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        const db = mongoose.connection;
        db.on('error', err=>{
            console.error('Database error: ', err.message);
            reject(err.message);
        })
        db.on('open', ()=>{
            console.log('Database connected.');
            resolve();
        });
    });    
};