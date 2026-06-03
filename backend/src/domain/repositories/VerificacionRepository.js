class VerificacionRepository {
  async guardar(verificacion) {
    throw new Error('Método guardar() debe ser implementado');
  }

  async obtenerTodas() {
    throw new Error('Método obtenerTodas() debe ser implementado');
  }

  async obtenerPorId(id) {
    throw new Error('Método obtenerPorId() debe ser implementado');
  }
}

module.exports = VerificacionRepository;