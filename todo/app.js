const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//Configuración para capturar datos en formularios
app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000');
});

