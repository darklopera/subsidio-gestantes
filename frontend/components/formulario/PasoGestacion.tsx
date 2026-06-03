'use client';
import { FormularioData } from '@/types/verificacion';

const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

interface Props {
  datos: FormularioData;
  onChange: (campo: string, valor: string) => void;
}

export default function PasoGestacion({ datos, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Información de Gestación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Se encuentra en estado de gestación? *</label>
          <select value={datos.estadoGestacion} onChange={e => onChange('estadoGestacion', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Semanas de gestación *</label>
          <input type="number" min="1" max="42" value={datos.semanasGestacion}
            onChange={e => onChange('semanasGestacion', e.target.value)}
            className={inputClass} placeholder="Semanas" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha tentativa de parto *</label>
          <input type="date" value={datos.fechaTentativaParto}
            onChange={e => onChange('fechaTentativaParto', e.target.value)}
            className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nivel de estudio *</label>
          <select value={datos.nivelEstudio} onChange={e => onChange('nivelEstudio', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sin escolaridad</option>
            <option>Primaria incompleta</option>
            <option>Primaria completa</option>
            <option>Bachiller incompleto</option>
            <option>Bachiller completo</option>
            <option>Técnico/Tecnólogo</option>
            <option>Profesional</option>
            <option>Postgrado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Tiene medio de transporte? *</label>
          <select value={datos.tieneMedioTransporte} onChange={e => onChange('tieneMedioTransporte', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        {datos.tieneMedioTransporte === 'Sí' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué medio de transporte tiene? *</label>
            <select value={datos.queMedioTransporte} onChange={e => onChange('queMedioTransporte', e.target.value)} className={inputClass}>
              <option value="">Seleccione...</option>
              <option>Moto</option>
              <option>Carro</option>
              <option>Bicicleta</option>
              <option>Patineta</option>
              <option>Animal</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número de hijos menores de edad *</label>
          <input type="number" min="0" max="10" value={datos.numeroHijosMenores}
            onChange={e => onChange('numeroHijosMenores', e.target.value)}
            className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número de hijos con discapacidad *</label>
          <input type="number" min="0" max="10" value={datos.numeroHijosDiscapacitados}
            onChange={e => onChange('numeroHijosDiscapacitados', e.target.value)}
            className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Ha sido víctima de violencia intrafamiliar?</label>
          <select value={datos.violenciaIntrafamiliar} onChange={e => onChange('violenciaIntrafamiliar', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
            <option>Prefiero no decirlo</option>
          </select>
        </div>

      </div>
    </div>
  );
}
