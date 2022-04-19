module.exports = {
    create: (req, res) =>{
        res.render('create', {title: 'Create new'});
    },
    post: (req, res) =>{
        res.redirect('/');
    }
}