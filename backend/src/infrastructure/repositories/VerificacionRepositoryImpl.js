const VerificacionRepository = require('../../domain/repositories/VerificacionRepository');
const prisma = require('../database/prismaClient');

class VerificacionRepositoryImpl extends VerificacionRepository {
  async guardar(datos) {
    return await prisma.verificacion.create({
      data: {
        nombreCompleto: datos.nombreCompleto,
        tipoDocumento: datos.tipoDocumento,
        numeroDocumento: datos.numeroDocumento,
        celular: datos.celular,
        correoElectronico: datos.correoElectronico,
        direccion: datos.direccion,
        ciudadMunicipio: datos.ciudadMunicipio,
        fechaNacimiento: datos.fechaNacimiento,
        edadCalculada: datos.edadCalculada,
        ruralOUrbano: datos.ruralOUrbano,
        genero: datos.genero,
        estadoGestacion: datos.estadoGestacion,
        nivelEstudio: datos.nivelEstudio,
        tieneMedioTransporte: datos.tieneMedioTransporte,
        queMedioTransporte: datos.queMedioTransporte ?? null,
        numeroHijosMenores: datos.numeroHijosMenores,
        numeroHijosDiscapacitados: datos.numeroHijosDiscapacitados,
        estratoSocioeconomico: datos.estratoSocioeconomico,
        ocupacion: datos.ocupacion,
        semanasGestacion: datos.semanasGestacion,
        fechaTentativaParto: datos.fechaTentativaParto,
        ingresoHogar: datos.ingresoHogar,
        esDesplazado: datos.esDesplazado,
        numeroPersonasCargo: datos.numeroPersonasCargo,
        estadoCivil: datos.estadoCivil,
        situacionLaboral: datos.situacionLaboral,
        tipoVivienda: datos.tipoVivienda,
        numeroPropiedades: datos.numeroPropiedades,
        tieneDiscapacidad: datos.tieneDiscapacidad,
        sisben: datos.sisben,
        tieneAguaPotable: datos.tieneAguaPotable,
        violenciaIntrafamiliar: datos.violenciaIntrafamiliar,
        fueExcluida: datos.fueExcluida,
        razonExclusion: datos.razonExclusion ?? null,
        puntajeTotal: datos.puntajeTotal ?? null,
        esElegible: datos.esElegible ?? null,
      },
    });
  }

  async obtenerTodas() {
    return await prisma.verificacion.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async obtenerPorId(id) {
    return await prisma.verificacion.findUnique({
      where: { id },
    });
  }
}

module.exports = VerificacionRepositoryImpl;