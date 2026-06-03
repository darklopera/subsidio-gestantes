const UMBRAL_ELEGIBILIDAD = 70;

const PUNTAJES = {
  nivelEstudio: {
    'Sin escolaridad': 16,
    'Primaria incompleta': 14,
    'Primaria completa': 12,
    'Bachiller incompleto': 10,
    'Bachiller completo': 8,
    'Técnico/Tecnólogo': 4,
    'Profesional': 1,
    'Postgrado': 0,
  },
  transporte: {
    'No tiene': 6,
    'Moto': 3,
    'Carro': 1,
    'Bicicleta': 4,
    'Patineta': 3,
    'Animal': 6,
  },
  edad: [
    { min: 10, max: 14, puntaje: 9 },
    { min: 14, max: 19, puntaje: 6 },
    { min: 20, max: 35, puntaje: 3 },
    { min: 36, max: 59, puntaje: 7 },
  ],
  hijosMenores: {
    0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10,
    6: 12, 7: 14, 8: 16, 9: 18, 10: 20,
  },
  hijosDiscapacitados: {
    0: 0, 1: 3, 2: 6, 3: 9, 4: 12, 5: 15,
    6: 18, 7: 21, 8: 24, 9: 27, 10: 30,
  },
  estrato: {
    1: 12, 2: 10, 3: 8, 4: 6, 5: 4, 6: 0,
  },
  ocupacion: {
    'Empleado formal (con contrato y prestaciones)': 8,
    'Empleado informal': 10,
    'Independiente / cuenta propia': 8,
    'Desempleado': 12,
    'Estudiante': 10,
    'Hogar (ama de casa)': 12,
  },
  ingresoHogar: {
    'Sin ingresos': 10,
    'Menos de 1 SMMLV': 8,
    'Entre 1 y 2 SMMLV': 6,
    'Entre 2 y 3 SMMLV': 4,
    'Más de 3 SMMLV': 2,
  },
  esDesplazado: {
    'Sí': 2,
    'No': 0,
  },
  numeroPersonasCargo: {
    '0': 2,
    '1 a 2': 6,
    '3 a 4': 9,
    '5 a 6': 12,
    '7 o más': 15,
  },
  estadoCivil: {
    'Soltera': 5,
    'Casada': 2,
    'Unión libre': 2,
    'Separada / Divorciada': 4,
    'Viuda': 5,
  },
  tipoVivienda: {
    'Propia pagada': 2,
    'Propia en financiación': 5,
    'Arrendada': 5,
    'Familiar o prestada': 2,
    'Invasión / asentamiento informal': 3,
  },
  numeroPropiedades: {
    '0 propiedades': 4,
    '1 propiedad': 2,
    '2 propiedades': 1,
    '3 o más propiedades': 0,
  },
  tieneDiscapacidad: {
    'Sí': 2,
    'No': 0,
  },
  sisben: {
    'Sin Sisbén': 0,
    'Grupo A (pobreza extrema)': 15,
    'Grupo B (pobreza moderada)': 12,
    'Grupo C (vulnerable)': 9,
    'Grupo D (no vulnerable)': 5,
  },
  tieneAguaPotable: {
    'Sí': 0,
    'No': 4,
  },
};

const COMBINACION_LABORAL_INGRESO = [
  { situacion: 'Desempleado', ingreso: 'Sin ingresos', nivel: 'Máxima vulnerabilidad', puntaje: 21 },
  { situacion: 'Desempleado', ingreso: 'Menos de 1 SMMLV', nivel: 'Muy alta vulnerabilidad (ingresos de otros en el hogar)', puntaje: 18 },
  { situacion: 'Desempleado', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Desempleado', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Desempleado', ingreso: 'Más de 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Empleado informal', ingreso: 'Sin ingresos', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Empleado informal', ingreso: 'Menos de 1 SMMLV', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Empleado informal', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Empleado informal', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Empleado informal', ingreso: 'Más de 3 SMMLV', nivel: 'Sin vulnerabilidad', puntaje: 0 },
  { situacion: 'Independiente / cuenta propia', ingreso: 'Sin ingresos', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Independiente / cuenta propia', ingreso: 'Menos de 1 SMMLV', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Independiente / cuenta propia', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Independiente / cuenta propia', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Independiente / cuenta propia', ingreso: 'Más de 3 SMMLV', nivel: 'Sin vulnerabilidad', puntaje: 0 },
  { situacion: 'Empleado formal (con contrato y prestaciones)', ingreso: 'Menos de 1 SMMLV', nivel: 'Vulnerabilidad media-alta', puntaje: 12 },
  { situacion: 'Empleado formal (con contrato y prestaciones)', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Empleado formal (con contrato y prestaciones)', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Empleado formal (con contrato y prestaciones)', ingreso: 'Más de 3 SMMLV', nivel: 'Sin vulnerabilidad', puntaje: 0 },
  { situacion: 'Hogar (ama de casa)', ingreso: 'Sin ingresos', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Hogar (ama de casa)', ingreso: 'Menos de 1 SMMLV', nivel: 'Vulnerabilidad media-alta', puntaje: 12 },
  { situacion: 'Hogar (ama de casa)', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Hogar (ama de casa)', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Hogar (ama de casa)', ingreso: 'Más de 3 SMMLV', nivel: 'Sin vulnerabilidad', puntaje: 0 },
  { situacion: 'Estudiante', ingreso: 'Sin ingresos', nivel: 'Alta vulnerabilidad', puntaje: 15 },
  { situacion: 'Estudiante', ingreso: 'Menos de 1 SMMLV', nivel: 'Vulnerabilidad media-alta', puntaje: 12 },
  { situacion: 'Estudiante', ingreso: 'Entre 1 y 2 SMMLV', nivel: 'Vulnerabilidad media', puntaje: 9 },
  { situacion: 'Estudiante', ingreso: 'Entre 2 y 3 SMMLV', nivel: 'Baja vulnerabilidad', puntaje: 6 },
  { situacion: 'Estudiante', ingreso: 'Más de 3 SMMLV', nivel: 'Sin vulnerabilidad', puntaje: 0 },
];

class EvaluarElegibilidad {
  constructor(verificacionRepository) {
    this.verificacionRepository = verificacionRepository;
  }

  _evaluarExcluyentes(datos) {
    if (datos.genero !== 'Femenino cisgénero') {
      return 'El beneficio está dirigido exclusivamente a mujeres cisgénero.';
    }
    if (datos.estadoGestacion !== 'Sí') {
      return 'Debe encontrarse en estado de gestación para aplicar al beneficio.';
    }
    if (datos.ciudadMunicipio !== 'Tangamandapio') {
      return 'El beneficio aplica únicamente para residentes de Tangamandapio.';
    }
    return null;
  }

  _calcularPuntajeEdad(edad) {
    const rango = PUNTAJES.edad.find(r => edad >= r.min && edad <= r.max);
    return rango ? rango.puntaje : 0;
  }

  _calcularCombinacionTransporte(tieneMedio, queMedio) {
    if (tieneMedio === 'No' || !queMedio) return PUNTAJES.transporte['No tiene'];
    return PUNTAJES.transporte[queMedio] ?? 0;
  }

  _calcularCombinacionLaboralIngreso(situacion, ingreso) {
    const combinacion = COMBINACION_LABORAL_INGRESO.find(
      c => c.situacion === situacion && c.ingreso === ingreso
    );
    return combinacion ? combinacion.puntaje : 0;
  }

  _calcularPuntajeTotal(datos, edad) {
    let puntaje = 0;
    puntaje += PUNTAJES.nivelEstudio[datos.nivelEstudio] ?? 0;
    puntaje += this._calcularPuntajeEdad(edad);
    puntaje += this._calcularCombinacionTransporte(datos.tieneMedioTransporte, datos.queMedioTransporte);
    puntaje += PUNTAJES.hijosMenores[datos.numeroHijosMenores] ?? 0;
    puntaje += PUNTAJES.hijosDiscapacitados[datos.numeroHijosDiscapacitados] ?? 0;
    puntaje += PUNTAJES.estrato[datos.estratoSocioeconomico] ?? 0;
    puntaje += PUNTAJES.ocupacion[datos.ocupacion] ?? 0;
    puntaje += PUNTAJES.esDesplazado[datos.esDesplazado] ?? 0;
    puntaje += PUNTAJES.numeroPersonasCargo[datos.numeroPersonasCargo] ?? 0;
    puntaje += PUNTAJES.estadoCivil[datos.estadoCivil] ?? 0;
    puntaje += PUNTAJES.tipoVivienda[datos.tipoVivienda] ?? 0;
    puntaje += PUNTAJES.numeroPropiedades[datos.numeroPropiedades] ?? 0;
    puntaje += PUNTAJES.tieneDiscapacidad[datos.tieneDiscapacidad] ?? 0;
    puntaje += PUNTAJES.sisben[datos.sisben] ?? 0;
    puntaje += PUNTAJES.tieneAguaPotable[datos.tieneAguaPotable] ?? 0;
    puntaje += this._calcularCombinacionLaboralIngreso(datos.situacionLaboral, datos.ingresoHogar);
    return puntaje;
  }

  async ejecutar(datos) {
    const entidad = {
      ...datos,
      fechaNacimiento: new Date(datos.fechaNacimiento),
      fechaTentativaParto: new Date(datos.fechaTentativaParto),
    };

    const hoy = new Date();
    const nacimiento = entidad.fechaNacimiento;
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;

    const razonExclusion = this._evaluarExcluyentes(datos);

    if (razonExclusion) {
      const registro = await this.verificacionRepository.guardar({
        ...entidad,
        edadCalculada: edad,
        fueExcluida: true,
        razonExclusion,
        puntajeTotal: null,
        esElegible: null,
      });
      return {
        esElegible: false,
        fueExcluida: true,
        razonExclusion,
        puntajeTotal: null,
        id: registro.id,
      };
    }

    const puntajeTotal = this._calcularPuntajeTotal(datos, edad);
    const esElegible = puntajeTotal >= UMBRAL_ELEGIBILIDAD;

    const registro = await this.verificacionRepository.guardar({
      ...entidad,
      edadCalculada: edad,
      fueExcluida: false,
      razonExclusion: null,
      puntajeTotal,
      esElegible,
    });

    return {
      esElegible,
      fueExcluida: false,
      razonExclusion: null,
      puntajeTotal,
      id: registro.id,
    };
  }
}

module.exports = EvaluarElegibilidad;