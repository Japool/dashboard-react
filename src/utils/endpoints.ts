//////////// para create react app
//const apiURL = process.env.REACT_APP_API_URL;
//const apiHUB = process.env.REACT_APP_API_HUB;
//////////// Para vite
const apiURL = import.meta.env.VITE_API_URL;
const apiHUB = import.meta.env.VITE_API_HUB;
export const urlGeneros = `${apiURL}/generos`;
export const urlActores = `${apiURL}/actores`;
export const urlCines = `${apiURL}/cines`;
export const urlPeliculas = `${apiURL}/peliculas`;
export const urlCuentas = `${apiURL}/cuentas`;
export const urlRatings = `${apiURL}/rating`;
export const urlAcceso = `${apiURL}/Acceso`;
export const urlIncidencia = `${apiURL}/Incidencia`;
export const urlZonas = `${apiURL}/zonas`;
export const urlCatalogos = `${apiURL}/catalogos`;
export const urlCapturas = `${apiURL}/capturas`;
export const urlPersonal = `${apiURL}/operadores`;
export const urlRuta = `${apiURL}/rutas`;
export const urlUnidad = `${apiURL}/unidades`;
export const urlDespacho = `${apiURL}/despachos`;
export const urlPosicionamiento = `${apiURL}/Posicionamiento`;
export const urlGrupo = `${apiURL}/Grupo`;
export const urlGeocerca = `${apiURL}/Geocerca`;
export const urlAlerta = `${apiURL}/Alerta`;
export const urlNotificacion = `${apiURL}/Notificacion`;
///////Hub endpoints
export const urlHub = `${apiHUB}/hubs`;
