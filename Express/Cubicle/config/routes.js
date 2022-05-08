const {catalog} = require('../controllers/catalog');
const {about} = require('../controllers/about');
const {details} = require('../controllers/details');
const {create, post: createPost} = require('../controllers/create');
const {edit, post: editPost} = require('../controllers/edit');
const {post: commentPost} = require('../controllers/comments');
const {notFound} = require('../controllers/notFound');


module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);

    app.get('/create', create);
    app.post('/create', createPost);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.post('/comments/:cubeId/create', commentPost);
    
    app.all('*', notFound);
};