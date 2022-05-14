const {details} = require('../controllers/details');
const {post: commentPost} = require('../controllers/comments');

const homeController = require('../controllers/homeController');

const productController = require('../controllers/productController');


module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/product'));
    
    app.use('/product', productController);  

    app.post('/comments/:cubeId/create', commentPost);
        
    app.use('/', homeController);
};