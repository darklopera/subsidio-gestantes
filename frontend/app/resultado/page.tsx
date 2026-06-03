'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function ResultadoContenido() {
  const params = useSearchParams();
  const esElegible = params.get('elegible') === 'true';
  const fueExcluida = params.get('excluida') === 'true';
  const razon = params.get('razon') || '';
  const puntaje = params.get('puntaje');

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

        {/* Encabezado con color según resultado */}
        <div className={`py-8 px-6 text-center text-white ${fueExcluida || !esElegible ? 'bg-red-600' : 'bg-green-600'}`}>
          <div className="text-5xl mb-3">
            {fueExcluida || !esElegible ? '✗' : '✓'}
          </div>
          <h1 className="text-2xl font-bold">
            {fueExcluida || !esElegible ? 'No Apta' : 'Apta'}
          </h1>
          <p className="text-sm mt-1 opacity-90">
            Resultado de verificación de elegibilidad
          </p>
        </div>

        {/* Detalle del resultado */}
        <div className="p-6 space-y-4">
          {fueExcluida ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-red-700 mb-1">
                No cumple con los requisitos básicos
              </p>
              <p className="text-sm text-red-600">{razon}</p>
            </div>
          ) : (
            <>
              <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Puntaje obtenido</span>
                <span className="text-2xl font-bold text-gray-800">{puntaje} <span className="text-sm font-normal text-gray-400">/ 188</span></span>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Puntaje mínimo requerido</span>
                <span className="text-lg font-semibold text-gray-700">70</span>
              </div>

              <div className={`rounded-lg p-4 ${esElegible ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <p className={`text-sm font-semibold ${esElegible ? 'text-green-700' : 'text-red-700'}`}>
                  {esElegible
                    ? 'Según sus condiciones, es viable para ser beneficiaria del subsidio.'
                    : 'Según sus condiciones, no es viable para ser beneficiaria del subsidio.'}
                </p>
              </div>
            </>
          )}

          <div className="pt-4 flex flex-col gap-3">
            <Link href="/"
              className="block text-center py-2 px-4 bg-rose-700 text-white rounded-lg text-sm font-medium hover:bg-rose-800 transition-colors">
              Nueva verificación
            </Link>
            <Link href="/historial"
              className="block text-center py-2 px-4 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Ver historial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultadoPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-gray-500">Cargando resultado...</div>}>
      <ResultadoContenido />
    </Suspense>
  );
}