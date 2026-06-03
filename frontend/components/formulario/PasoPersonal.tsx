'use client';
import { FormularioData } from '@/types/verificacion';

const MUNICIPIOS = [
  'Aguaclara','Bellaverde','Cerropiedra','Ciénaga del Monte','El Palmar',
  'Florestal','Guayabal de Río','La Esperanza','Los Almendros','Miravalles',
  'Montesol','Nueva Granada','Piedrancha','Puerto Sereno','Rionegrito',
  'San Cristóbal del Valle','Santa Lucía del Bosque','Tangamandapio',
  'Tierraverde','Villa del Río',
];

const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500";

interface Props {
  datos: FormularioData;
  onChange: (campo: string, valor: string) => void;
}

export default function PasoPersonal({ datos, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Datos Personales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
          <input type="text" value={datos.nombreCompleto}
            onChange={e => onChange('nombreCompleto', e.target.value)}
            className={inputClass} placeholder="Nombre y apellidos" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de documento *</label>
          <select value={datos.tipoDocumento} onChange={e => onChange('tipoDocumento', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Cédula de ciudadanía</option>
            <option>Tarjeta de identidad</option>
            <option>Cédula de extranjería</option>
            <option>Pasaporte</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número de documento *</label>
          <input type="text" value={datos.numeroDocumento}
            onChange={e => onChange('numeroDocumento', e.target.value)}
            className={inputClass} placeholder="Número de documento" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento *</label>
          <input type="date" value={datos.fechaNacimiento}
            onChange={e => onChange('fechaNacimiento', e.target.value)}
            className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
          <input type="tel" value={datos.celular}
            onChange={e => onChange('celular', e.target.value)}
            className={inputClass} placeholder="Número de celular" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
          <input type="email" value={datos.correoElectronico}
            onChange={e => onChange('correoElectronico', e.target.value)}
            className={inputClass} placeholder="correo@ejemplo.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
          <input type="text" value={datos.direccion}
            onChange={e => onChange('direccion', e.target.value)}
            className={inputClass} placeholder="Dirección de residencia" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad o municipio *</label>
          <select value={datos.ciudadMunicipio} onChange={e => onChange('ciudadMunicipio', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            {MUNICIPIOS.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Género *</label>
          <select value={datos.genero} onChange={e => onChange('genero', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Femenino cisgénero</option>
            <option>Masculino cisgénero</option>
            <option>Mujer transgénero</option>
            <option>Hombre transgénero</option>
            <option>No binario</option>
            <option>Prefiero no decirlo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zona de residencia *</label>
          <select value={datos.ruralOUrbano} onChange={e => onChange('ruralOUrbano', e.target.value)} className={inputClass}>
            <option value="">Seleccione...</option>
            <option>Rural</option>
            <option>Urbano</option>
          </select>
        </div>

      </div>
    </div>
  );
}
