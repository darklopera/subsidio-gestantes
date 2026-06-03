class Verificacion {
  constructor({
    nombreCompleto,
    tipoDocumento,
    numeroDocumento,
    celular,
    correoElectronico,
    direccion,
    ciudadMunicipio,
    fechaNacimiento,
    ruralOUrbano,
    genero,
    estadoGestacion,
    nivelEstudio,
    tieneMedioTransporte,
    queMedioTransporte,
    numeroHijosMenores,
    numeroHijosDiscapacitados,
    estratoSocioeconomico,
    ocupacion,
    semanasGestacion,
    fechaTentativaParto,
    ingresoHogar,
    esDesplazado,
    numeroPersonasCargo,
    estadoCivil,
    situacionLaboral,
    tipoVivienda,
    numeroPropiedades,
    tieneDiscapacidad,
    sisben,
    tieneAguaPotable,
    violenciaIntrafamiliar,
  }) {
    this.nombreCompleto = nombreCompleto;
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.celular = celular;
    this.correoElectronico = correoElectronico;
    this.direccion = direccion;
    this.ciudadMunicipio = ciudadMunicipio;
    this.fechaNacimiento = new Date(fechaNacimiento);
    this.ruralOUrbano = ruralOUrbano;
    this.genero = genero;
    this.estadoGestacion = estadoGestacion;
    this.nivelEstudio = nivelEstudio;
    this.tieneMedioTransporte = tieneMedioTransporte;
    this.queMedioTransporte = queMedioTransporte || null;
    this.numeroHijosMenores = Number(numeroHijosMenores);
    this.numeroHijosDiscapacitados = Number(numeroHijosDiscapacitados);
    this.estratoSocioeconomico = Number(estratoSocioeconomico);
    this.ocupacion = ocupacion;
    this.semanasGestacion = Number(semanasGestacion);
    this.fechaTentativaParto = new Date(fechaTentativaParto);
    this.ingresoHogar = ingresoHogar;
    this.esDesplazado = esDesplazado;
    this.numeroPersonasCargo = numeroPersonasCargo;
    this.estadoCivil = estadoCivil;
    this.situacionLaboral = situacionLaboral;
    this.tipoVivienda = tipoVivienda;
    this.numeroPropiedades = numeroPropiedades;
    this.tieneDiscapacidad = tieneDiscapacidad;
    this.sisben = sisben;
    this.tieneAguaPotable = tieneAguaPotable;
    this.violenciaIntrafamiliar = violenciaIntrafamiliar;
  }

  calcularEdad() {
    const hoy = new Date();
    const nacimiento = this.fechaNacimiento;
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
}

module.exports = Verificacion;