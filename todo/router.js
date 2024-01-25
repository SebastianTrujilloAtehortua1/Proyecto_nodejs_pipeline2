const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//Mostrar todos los registros
router.get('/', (req, res)=>{
   
   conexion.query('select * from users', (error, results)=>{
    if(error){
        throw error;
    }else{
        res.render('index', {results:results});
        //res.send(results);
    }
   })  
})

//Ruta para crear registros
router.get('/create', (req, res)=>{
    res.render('create');
    //res.send('create');
})

//Ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('select * from users where id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})

//Ruta para eliminar el registro
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('delete from users where id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        } 
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;