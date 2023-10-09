// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listarFavoritos,
    cadastrarFavorito
} = require('../controllers/favoritosController');

router.get('favoritos', listarFavoritos)
router.post('create/favoritos', cadastrarFavorito)