const router = require('express').Router();


router.get('/', (req, res) => res.redirect('/product'));

router.get('/about', (req, res) =>{
    res.render('about', {title: 'About us'});
});

router.all('*', (req, res) =>{
    res.render(404, {title: 'Page not found'});
});


module.exports = router;
