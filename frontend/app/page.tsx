import FormularioElegibilidad from '@/components/formulario/FormularioElegibilidad';

export default function HomePage() {
  return (
    <div>
      <div className="bg-green-800 text-white py-8 px-4 text-center">
        <h1 className="text-2xl font-bold">Subsidio para Madres Gestantes</h1>
        <p className="text-green-200 mt-1 text-sm">
          Complete el formulario para verificar su elegibilidad al beneficio
        </p>
      </div>
      <FormularioElegibilidad />
    </div>
  );
}