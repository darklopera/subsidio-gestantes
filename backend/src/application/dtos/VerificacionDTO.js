class VerificacionDTO {
  constructor(verificacion) {
    this.id = verificacion.id;
    this.nombreCompleto = verificacion.nombreCompleto;
    this.tipoDocumento = verificacion.tipoDocumento;
    this.numeroDocumento = verificacion.numeroDocumento;
    this.celular = verificacion.celular;
    this.correoElectronico = verificacion.correoElectronico;
    this.direccion = verificacion.direccion;
    this.ciudadMunicipio = verificacion.ciudadMunicipio;
    this.fechaNacimiento = verificacion.fechaNacimiento;
    this.edadCalculada = verificacion.edadCalculada;
    this.ruralOUrbano = verificacion.ruralOUrbano;
    this.genero = verificacion.genero;
    this.estadoGestacion = verificacion.estadoGestacion;
    this.nivelEstudio = verificacion.nivelEstudio;
    this.tieneMedioTransporte = verificacion.tieneMedioTransporte;
    this.queMedioTransporte = verificacion.queMedioTransporte;
    this.numeroHijosMenores = verificacion.numeroHijosMenores;
    this.numeroHijosDiscapacitados = verificacion.numeroHijosDiscapacitados;
    this.estratoSocioeconomico = verificacion.estratoSocioeconomico;
    this.ocupacion = verificacion.ocupacion;
    this.semanasGestacion = verificacion.semanasGestacion;
    this.fechaTentativaParto = verificacion.fechaTentativaParto;
    this.ingresoHogar = verificacion.ingresoHogar;
    this.esDesplazado = verificacion.esDesplazado;
    this.numeroPersonasCargo = verificacion.numeroPersonasCargo;
    this.estadoCivil = verificacion.estadoCivil;
    this.situacionLaboral = verificacion.situacionLaboral;
    this.tipoVivienda = verificacion.tipoVivienda;
    this.numeroPropiedades = verificacion.numeroPropiedades;
    this.tieneDiscapacidad = verificacion.tieneDiscapacidad;
    this.sisben = verificacion.sisben;
    this.tieneAguaPotable = verificacion.tieneAguaPotable;
    this.violenciaIntrafamiliar = verificacion.violenciaIntrafamiliar;
    this.fueExcluida = verificacion.fueExcluida;
    this.razonExclusion = verificacion.razonExclusion;
    this.puntajeTotal = verificacion.puntajeTotal;
    this.esElegible = verificacion.esElegible;
    this.createdAt = verificacion.createdAt;
  }
}

module.exports = VerificacionDTO;