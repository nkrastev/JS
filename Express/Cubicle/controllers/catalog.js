module.exports = {
    catalog: async (req, res) =>{
        const cubes = await req.storage.getAll();        
        const ctx = {
            title: 'Home page',
            cubes
        }        
        res.render('index', ctx);
    }
}