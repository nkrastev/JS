const {Schema, model} = require('mongoose');

const schema = new Schema({
    name : String,
    description : String,
    imageUrl : String,
    difficultyLevel : Number
});

module.exports = model('Cube', schema);