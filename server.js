const express = require('express');
const app = express();
const { sequelize } = require('./models/index');


//Settings
const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());
app.use(express.urlencoded( { extended: false} ));

// Rutas
app.use(require('./routes'));


app.listen(PORT, function () {
    console.log(`App running on http://localhost:${PORT}`);


    sequelize.authenticate().then(() => {
        console.log('Conectados a la base de datos');
    });
});