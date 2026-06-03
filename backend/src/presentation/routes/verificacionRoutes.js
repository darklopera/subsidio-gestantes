const { Router } = require('express');
const VerificacionController = require('../controllers/VerificacionController');

const router = Router();
const controller = new VerificacionController();

router.post('/', (req, res, next) => controller.evaluar(req, res, next));
router.get('/', (req, res, next) => controller.obtenerTodas(req, res, next));
router.get('/:id', (req, res, next) => controller.obtenerPorId(req, res, next));

module.exports = router;