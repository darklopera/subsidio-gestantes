const EvaluarElegibilidad = require('../../application/use-cases/EvaluarElegibilidad');
const ObtenerVerificaciones = require('../../application/use-cases/ObtenerVerificaciones');
const VerificacionRepositoryImpl = require('../../infrastructure/repositories/VerificacionRepositoryImpl');
const VerificacionDTO = require('../../application/dtos/VerificacionDTO');

const repository = new VerificacionRepositoryImpl();
const evaluarElegibilidad = new EvaluarElegibilidad(repository);
const obtenerVerificaciones = new ObtenerVerificaciones(repository);

class VerificacionController {
  async evaluar(req, res, next) {
    try {
      const resultado = await evaluarElegibilidad.ejecutar(req.body);
      return res.status(201).json({ ok: true, data: resultado });
    } catch (error) {
      next(error);
    }
  }

  async obtenerTodas(req, res, next) {
    try {
      const verificaciones = await obtenerVerificaciones.ejecutar();
      const dtos = verificaciones.map(v => new VerificacionDTO(v));
      return res.status(200).json({ ok: true, data: dtos });
    } catch (error) {
      next(error);
    }
  }

  async obtenerPorId(req, res, next) {
    try {
      const verificacion = await obtenerVerificaciones.ejecutarPorId(req.params.id);
      if (!verificacion) {
        return res.status(404).json({ ok: false, message: 'Verificación no encontrada' });
      }
      return res.status(200).json({ ok: true, data: new VerificacionDTO(verificacion) });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = VerificacionController;