module.exports = {
    
    async post(req, res){
        const cubeId = req.params.cubeId;
        const comment = {
            author: req.body.author,
            content: req.body.content,           
        }        

        req.storage.createComment(cubeId, comment);

        res.redirect(`/details/${cubeId}`);
    }
}