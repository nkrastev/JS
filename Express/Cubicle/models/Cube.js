const {Schema, model} = require('mongoose');
const Comment = require('./Comment');

const schema = new Schema({
    name : {type: String, required: true},
    description : {type: String, required: true, maxlength:500},
    imageUrl : {type: String, required: true, match: /^https?:\/\//},
    difficultyLevel : {type:Number, min:1, max:6},
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = model('Cube', schema);