'use client';
import { useEffect, useState } from 'react';
import { obtenerVerificaciones } from '@/lib/api';
import { Verificacion } from '@/types/verificacion';
import Link from 'next/link';

export default function HistorialPage() {
  const [verificaciones, setVerificaciones] = useState<Verificacion[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerVerificaciones()
      .then(res => setVerificaciones(res.data))
      .catch(() => setError('No se pudo cargar el historial.'))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Historial de Verificaciones</h1>
        <Link href="/"
          className="text-sm px-4 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors">
          Nueva verificación
        </Link>
      </div>

      {cargando && (
        <div className="text-center py-12 text-gray-500">Cargando historial...</div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
          {error}
        </div>
      )}

      {!cargando && !error && verificaciones.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No hay verificaciones registradas aún.
        </div>
      )}

      {!cargando && verificaciones.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Nombre</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Documento</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Fecha</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Puntaje</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {verificaciones.map(v => (
                <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-800">{v.nombreCompleto}</td>
                  <td className="px-4 py-3 text-gray-500">{v.tipoDocumento}: {v.numeroDocumento}</td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(v.createdAt).toLocaleDateString('es-CO', {
                      day: '2-digit', month: '2-digit', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {v.fueExcluida ? (
                      <span className="text-gray-400 text-xs">Excluida</span>
                    ) : (
                      <span className="font-semibold text-gray-700">{v.puntajeTotal} / 188</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {v.fueExcluida ? (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        No apta (excluida)
                      </span>
                    ) : v.esElegible ? (
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Apta
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        No apta
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}