const express = require('express');
const router = express.Router();
const resultadoController = require('../controllers/resultadoController');

router.get('/', resultadoController.getResultado);
router.post('/revisar', resultadoController.postRevisar);
router.post('/recalcular', resultadoController.postRecalcular);

module.exports = router;
