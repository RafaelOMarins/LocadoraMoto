const { Router } = require('express');
const motoController = require('../controllers/motoController');

const router = Router();

router.post('/motos', motoController.register);

module.exports = router;