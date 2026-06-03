'use client';
import { FormularioData } from '@/types/verificacion';

const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

interface Props {
  datos: FormularioData;
  onChange: (campo: string, valor: string) => void;
}

export default function PasoVivienda({ datos, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Información de Vivienda y Salud</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de vivienda *</label>
          <select value={datos.tipoVivienda} onChange={e => onChange('tipoVivienda', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Propia pagada</option>
            <option>Propia en financiación</option>
            <option>Arrendada</option>
            <option>Familiar o prestada</option>
            <option>Invasión / asentamiento informal</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número de propiedades *</label>
          <select value={datos.numeroPropiedades} onChange={e => onChange('numeroPropiedades', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>0 propiedades</option>
            <option>1 propiedad</option>
            <option>2 propiedades</option>
            <option>3 o más propiedades</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Tiene acceso a agua potable? *</label>
          <select value={datos.tieneAguaPotable} onChange={e => onChange('tieneAguaPotable', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Tiene alguna discapacidad? *</label>
          <select value={datos.tieneDiscapacidad} onChange={e => onChange('tieneDiscapacidad', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

      </div>

      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
        <p className="font-medium">Importante</p>
        <p>Al enviar este formulario, usted declara que la información suministrada es veraz.
        Los datos serán utilizados exclusivamente para evaluar su elegibilidad al subsidio.</p>
      </div>
    </div>
  );
}
