//URL base para todas las peticiones
export const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

//Token para la peticiones protegidas. Por defecto nos regresa el access token
export const HEADER_TOKEN = (type: 'access_token' | 'refresh_token' = 'access_token')=>{
    let token = JSON.parse(sessionStorage.getItem(type) || '');
    return{Authorization: `Bearer ${token}`}
}

//Numero de saltos para la paginación
export const numToJumpInPagination = 16