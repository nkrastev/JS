const Cube = require('../models/Cube');
const Comment = require('../models/Comment');

async function init() {
  
  return (req, res, next) => {
    req.storage = {     
      createComment,
    };
    next();
  };
}



async function createComment(cubeId, comment){
    const cube = await Cube.findById(cubeId);
    if(!cube){
      throw new ReferenceError('No such ID in database for comment adding');
    }

    const newComment = new Comment(comment);
    await newComment.save();

    cube.comments.push(newComment);
    await cube.save();
}

module.exports = {
  init,  
  createComment
};
