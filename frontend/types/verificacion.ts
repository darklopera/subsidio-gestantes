export interface FormularioData {
  // Datos personales
  nombreCompleto: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  correoElectronico: string;
  direccion: string;
  ciudadMunicipio: string;
  fechaNacimiento: string;
  ruralOUrbano: string;
  // Excluyentes
  genero: string;
  estadoGestacion: string;
  // Gestación
  nivelEstudio: string;
  semanasGestacion: string;
  fechaTentativaParto: string;
  // Transporte
  tieneMedioTransporte: string;
  queMedioTransporte: string;
  // Familia
  numeroHijosMenores: string;
  numeroHijosDiscapacitados: string;
  estratoSocioeconomico: string;
  ocupacion: string;
  // Económico
  ingresoHogar: string;
  esDesplazado: string;
  numeroPersonasCargo: string;
  estadoCivil: string;
  situacionLaboral: string;
  // Vivienda
  tipoVivienda: string;
  numeroPropiedades: string;
  tieneDiscapacidad: string;
  sisben: string;
  tieneAguaPotable: string;
  violenciaIntrafamiliar: string;
}

export interface ResultadoVerificacion {
  id: string;
  esElegible: boolean;
  fueExcluida: boolean;
  razonExclusion: string | null;
  puntajeTotal: number | null;
}

export interface Verificacion extends FormularioData {
  id: string;
  edadCalculada: number;
  fueExcluida: boolean;
  razonExclusion: string | null;
  puntajeTotal: number | null;
  esElegible: boolean | null;
  createdAt: string;
}