const express = require('express');
const router = express.Router();
// Función que manda como respuesta cuando se accede
//cuando entren a la ruta inicial => se va a manejar con una función => Enviando un archivo
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html')); -----> estó si utilizas html
    res.render('index', { title: 'Blog' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' });
});

router.get('/acerca', (req, res) => {
    res.render('contact', { title: 'Acerca de' });
});

module.exports = router;