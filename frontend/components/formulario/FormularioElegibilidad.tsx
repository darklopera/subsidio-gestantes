'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormularioData } from '@/types/verificacion';
import { evaluarElegibilidad } from '@/lib/api';
import PasoPersonal from './PasoPersonal';
import PasoGestacion from './PasoGestacion';
import PasoSocioeconomico from './PasoSocioeconomico';
import PasoVivienda from './PasoVivienda';

const PASOS = ['Datos Personales', 'Gestación', 'Socioeconómico', 'Vivienda y Salud'];

const datosIniciales: FormularioData = {
  nombreCompleto: '', tipoDocumento: '', numeroDocumento: '',
  celular: '', correoElectronico: '', direccion: '',
  ciudadMunicipio: '', fechaNacimiento: '', ruralOUrbano: '',
  genero: '', estadoGestacion: '', nivelEstudio: '',
  semanasGestacion: '', fechaTentativaParto: '',
  tieneMedioTransporte: '', queMedioTransporte: '',
  numeroHijosMenores: '0', numeroHijosDiscapacitados: '0',
  estratoSocioeconomico: '', ocupacion: '', ingresoHogar: '',
  esDesplazado: '', numeroPersonasCargo: '', estadoCivil: '',
  situacionLaboral: '', tipoVivienda: '', numeroPropiedades: '',
  tieneDiscapacidad: '', sisben: '', tieneAguaPotable: '',
  violenciaIntrafamiliar: '',
};

export default function FormularioElegibilidad() {
  const router = useRouter();
  const [pasoActual, setPasoActual] = useState(0);
  const [datos, setDatos] = useState<FormularioData>(datosIniciales);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (campo: string, valor: string) => {
    setDatos(prev => ({ ...prev, [campo]: valor }));
  };

  const handleSiguiente = () => {
    setError(null);
    if (pasoActual < PASOS.length - 1) setPasoActual(prev => prev + 1);
  };

  const handleAnterior = () => {
    setError(null);
    if (pasoActual > 0) setPasoActual(prev => prev - 1);
  };

  const handleEnviar = async () => {
    setCargando(true);
    setError(null);
    try {
      const payload = {
        ...datos,
        numeroHijosMenores: Number(datos.numeroHijosMenores),
        numeroHijosDiscapacitados: Number(datos.numeroHijosDiscapacitados),
        estratoSocioeconomico: Number(datos.estratoSocioeconomico),
        semanasGestacion: Number(datos.semanasGestacion),
      };
      const respuesta = await evaluarElegibilidad(payload);
      const resultado = respuesta.data;
      router.push(
        `/resultado?elegible=${resultado.esElegible}&excluida=${resultado.fueExcluida}&razon=${encodeURIComponent(resultado.razonExclusion || '')}&puntaje=${resultado.puntajeTotal ?? ''}&id=${resultado.id}`
      );
    } catch {
      setError('Ocurrió un error al enviar el formulario. Por favor intente nuevamente.');
    } finally {
      setCargando(false);
    }
  };

  const renderPaso = () => {
    switch (pasoActual) {
      case 0: return <PasoPersonal datos={datos} onChange={handleChange} />;
      case 1: return <PasoGestacion datos={datos} onChange={handleChange} />;
      case 2: return <PasoSocioeconomico datos={datos} onChange={handleChange} />;
      case 3: return <PasoVivienda datos={datos} onChange={handleChange} />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Indicador de pasos */}
      <div className="flex items-center justify-between mb-8">
        {PASOS.map((nombre, index) => (
          <div key={index} className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
              ${index < pasoActual ? 'bg-rose-600 text-white' :
                index === pasoActual ? 'bg-green-700 text-white ring-2 ring-green-300' :
                'bg-gray-200 text-gray-500'}`}>
              {index < pasoActual ? '✓' : index + 1}
            </div>
            <span className={`ml-2 text-xs hidden sm:block
              ${index === pasoActual ? 'text-rose-700 font-semibold' : 'text-gray-400'}`}>
              {nombre}
            </span>
            {index < PASOS.length - 1 && (
              <div className={`h-0.5 w-8 mx-2 ${index < pasoActual ? 'bg-rose-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Contenido del paso */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        {renderPaso()}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex justify-between mt-6 pt-4 border-t">
          <button onClick={handleAnterior} disabled={pasoActual === 0}
            className="px-5 py-2 text-sm rounded-lg border border-gray-300 text-gray-600
              hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            Anterior
          </button>

          {pasoActual < PASOS.length - 1 ? (
            <button onClick={handleSiguiente}
              className="px-5 py-2 text-sm rounded-lg bg-green-700 text-white
                hover:bg-green-800 transition-colors font-medium">
              Siguiente
            </button>
          ) : (
            <button onClick={handleEnviar} disabled={cargando}
              className="px-6 py-2 text-sm rounded-lg bg-green-700 text-white
                hover:bg-green-800 transition-colors font-medium disabled:opacity-60">
              {cargando ? 'Evaluando...' : 'Enviar formulario'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}