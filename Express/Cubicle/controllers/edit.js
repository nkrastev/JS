module.exports = {
    edit: async (req, res) =>{
        const cube = await req.storage.getById(req.params.id);
        cube[`select${cube.difficultyLevel}`] = true;

        if (!cube) {
            res.redirect('/');
        } else{            
            const ctx = {
                title: 'Edit item',
                cube
            };
            res.render('edit', ctx);
        }
        
    },
    async post (req, res) {
        const cube ={
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: Number(req.body.difficultyLevel)
        }     
        
        try {
            await req.storage.edit(req.params.id, cube);
        } catch (err) {            
            if (err.name=='ValidationError') {                
                return res.render('edit', {title: `Error editing`, cube: cube, error: 'Validations error.'});
            }            
        } 

        res.redirect('/');
    }
}