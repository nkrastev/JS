const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

const { init: storage} = require('./middlewares/storage');

start();

async function start(){
    const port = 3000;

    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    
    app.use(await storage());
    
    routesConfig(app);        
    
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
}



