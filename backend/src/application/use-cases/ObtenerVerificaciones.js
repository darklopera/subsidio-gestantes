class ObtenerVerificaciones {
  constructor(verificacionRepository) {
    this.verificacionRepository = verificacionRepository;
  }

  async ejecutar() {
    return await this.verificacionRepository.obtenerTodas();
  }

  async ejecutarPorId(id) {
    return await this.verificacionRepository.obtenerPorId(id);
  }
}

module.exports = ObtenerVerificaciones;