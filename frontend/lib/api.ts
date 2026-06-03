const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function evaluarElegibilidad(datos: object) {
  const response = await fetch(`${API_URL}/verificaciones`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!response.ok) throw new Error('Error al evaluar elegibilidad');
  return response.json();
}

export async function obtenerVerificaciones() {
  const response = await fetch(`${API_URL}/verificaciones`);
  if (!response.ok) throw new Error('Error al obtener verificaciones');
  return response.json();
}

export async function obtenerVerificacionPorId(id: string) {
  const response = await fetch(`${API_URL}/verificaciones/${id}`);
  if (!response.ok) throw new Error('Error al obtener verificación');
  return response.json();
}