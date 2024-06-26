
const API_BASE_URL = 'https://ibarberback.azurewebsites.net/api';
const API_BASE=`https://ibarberback.azurewebsites.net/`
export const API_URLS = {
  BARBERIA: `${API_BASE_URL}/barberia`,//se necesita
  USUARIO: `${API_BASE_URL}/usuario`,//autenticada,
  Registrar: `${API_BASE_URL}/Registrar`,//no
  LOGIN: `${API_BASE_URL}/login`,//no
  RECUPERAR: `${API_BASE_URL}/recuperar`,//no
  ActualizarBarberia:`${API_BASE_URL}/barberia/actualizado`,//autenticado
  obtenerBarberos:`${API_BASE_URL}/barberia/barberos`,//autenticado
  crearBarbero:`${API_BASE_URL}/barberia/new-barber`,//autenticado
  eliminarBarbero:`${API_BASE_URL}/barberia/delete-barber`,//necesita
  obtenerDatosBarberia:`${API_BASE_URL}/barberia/info`,//autenticado
  obtenerBarberias:`${API_BASE_URL}/barberias`,//autenticado
  obtenerBarberosAll:`${API_BASE_URL}/barberos`,//autenticado
  agendar_cita: `${API_BASE_URL}/citas`,//autenticado
  obtenerBarberosNombreBarberia: `${API_BASE_URL}/barberos`,
  obtenerInfoUsuario:`${API_BASE_URL}/date-user`,//autenticada
  actualizarBarbero:`${API_BASE_URL}/barberia/edit-barber`,//necesita
  obtenerCitasFiltradas: `${API_BASE_URL}/citas/misCitas`,//autenticado
  actualizarContrasena:`${API_BASE_URL}/usuario-password`,//autenticada
  obtenerImage:`${API_BASE}`,
  deleteCita: `${API_BASE_URL}/citas`,//pendiente
  deleteCuenta:`${API_BASE_URL}/usuario-delete`,//autenticada
  updateCita:`${API_BASE_URL}/citas/updateCita`,//pendiente
  resenas:`${API_BASE_URL}/resena`,
  obtenerResenas:`${API_BASE_URL}/obtenerResenas`,
  filtrarBarberiaPorNombre:`${API_BASE_URL}/filtrarBarberiaPorNombre`,
  notificationBell:`${API_BASE_URL}/notificationBell`,
  deleteBarberia:`${API_BASE_URL}/deleteBarberia`,//autenticada
  obtenerMejoresResenas:`${API_BASE_URL}/ResenasAll`,
trabajoEnMiBarberia:`${API_BASE_URL}/usuario-barberia`//autenticada
};
