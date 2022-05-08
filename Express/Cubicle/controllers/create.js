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

        try {
            await req.storage.create(cube);
        } catch (err) {            
            if (err.name=='ValidationError') {                
                return res.render('create', {title: 'Create cube', error: 'All fields are required. Image has to start with http/s...'});
            }            
        }        

        res.redirect('/');
    }
}