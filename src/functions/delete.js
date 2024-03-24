import { mostrarMensajeError, mostrarMensajeErrorInesperado } from "../modulos/alertas";

export const deleteBarber=async(url)=>{
    try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          return true
        } else {
          console.log(response)
          mostrarMensajeError('Error al borrar el barbero');
        }
      } catch (error) {
        mostrarMensajeErrorInesperado('Error de red:', error);
      }
}
