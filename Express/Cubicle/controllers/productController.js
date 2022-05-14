const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) =>{
    const cubes = await req.storage.getAll(req.query);        
    const ctx = {
        title: 'Home page',
        cubes,
        search: req.query.search || '',
        from: req.query.from || '',
        to: req.query.to || '',
    }        
    res.render('index', ctx);
});

router.get('/create', (req, res) =>{
    res.render('create', {title: 'Create new'});
});

router.post('/create', async (req, res) =>{
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
});

router.get('/details/:id', async (req, res) =>{
        
    const cube = await req.storage.getById(req.params.id);

    if (cube == undefined) {
        res.redirect('/404');
    }else{
        const ctx = {title: 'Details', cube};
        res.render('details', ctx);
    }            
});

router.get('/edit/:id', async (req, res) =>{
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
    
});

router.post('/edit/:id', async (req, res) => {
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
});

module.exports = router;