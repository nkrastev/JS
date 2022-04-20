module.exports = {
    details: async (req, res) =>{
        
        console.log(req.params.id);
        const cube = await req.storage.getById(req.params.id);

        if (cube == undefined) {
            res.redirect('/404');
        }else{
            const ctx = {title: 'Details', cube};
            res.render('details', ctx);
        }        
        
    }
};