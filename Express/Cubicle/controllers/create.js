module.exports = {
    create: (req, res) =>{
        res.render('create', {title: 'Create new'});
    },
    post: async (req, res) =>{
        const cube ={
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: Number(req.body.difficultyLevel)
        }        

        await req.storage.create(cube);

        res.redirect('/');
    }
}