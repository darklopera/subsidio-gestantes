'use client';
import { FormularioData } from '@/types/verificacion';

const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

interface Props {
  datos: FormularioData;
  onChange: (campo: string, valor: string) => void;
}

export default function PasoSocioeconomico({ datos, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Información Socioeconómica</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ocupación *</label>
          <select value={datos.ocupacion} onChange={e => onChange('ocupacion', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Empleado formal (con contrato y prestaciones)</option>
            <option>Empleado informal</option>
            <option>Independiente / cuenta propia</option>
            <option>Desempleado</option>
            <option>Estudiante</option>
            <option>Hogar (ama de casa)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Situación laboral *</label>
          <select value={datos.situacionLaboral} onChange={e => onChange('situacionLaboral', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Empleado formal (con contrato y prestaciones)</option>
            <option>Empleado informal</option>
            <option>Independiente / cuenta propia</option>
            <option>Desempleado</option>
            <option>Estudiante</option>
            <option>Hogar (ama de casa)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingresos del hogar *</label>
          <select value={datos.ingresoHogar} onChange={e => onChange('ingresoHogar', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sin ingresos</option>
            <option>Menos de 1 SMMLV</option>
            <option>Entre 1 y 2 SMMLV</option>
            <option>Entre 2 y 3 SMMLV</option>
            <option>Más de 3 SMMLV</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estrato socioeconómico *</label>
          <select value={datos.estratoSocioeconomico} onChange={e => onChange('estratoSocioeconomico', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option value="1">Estrato 1</option>
            <option value="2">Estrato 2</option>
            <option value="3">Estrato 3</option>
            <option value="4">Estrato 4</option>
            <option value="5">Estrato 5</option>
            <option value="6">Estrato 6</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado civil *</label>
          <select value={datos.estadoCivil} onChange={e => onChange('estadoCivil', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Soltera</option>
            <option>Casada</option>
            <option>Unión libre</option>
            <option>Separada / Divorciada</option>
            <option>Viuda</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número de personas a cargo *</label>
          <select value={datos.numeroPersonasCargo} onChange={e => onChange('numeroPersonasCargo', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option value="0">0</option>
            <option value="1 a 2">1 a 2</option>
            <option value="3 a 4">3 a 4</option>
            <option value="5 a 6">5 a 6</option>
            <option value="7 o más">7 o más</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Es víctima de desplazamiento? *</label>
          <select value={datos.esDesplazado} onChange={e => onChange('esDesplazado', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sisbén *</label>
          <select value={datos.sisben} onChange={e => onChange('sisben', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sin Sisbén</option>
            <option>Grupo A (pobreza extrema)</option>
            <option>Grupo B (pobreza moderada)</option>
            <option>Grupo C (vulnerable)</option>
            <option>Grupo D (no vulnerable)</option>
          </select>
        </div>

      </div>
    </div>
  );
}
