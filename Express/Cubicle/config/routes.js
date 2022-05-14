const {about} = require('../controllers/about');
const {details} = require('../controllers/details');
const {post: commentPost} = require('../controllers/comments');
const {notFound} = require('../controllers/notFound');

const productController = require('../controllers/productController');


module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/product'));
    app.get('/about', about);

    app.use('/product', productController);  

    app.post('/comments/:cubeId/create', commentPost);
    
    app.all('*', notFound);
};