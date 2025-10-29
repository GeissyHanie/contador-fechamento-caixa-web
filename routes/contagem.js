const express = require('express');
const router = express.Router();
const contagemController = require('../controllers/contagemController');

router.get('/', contagemController.getContagem);
router.post('/next', contagemController.postNextDenominacao);
router.post('/finalizar', contagemController.postFinalizarContagem);

module.exports = router;
