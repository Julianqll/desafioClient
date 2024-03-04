import axios from 'axios';

const portalApi = axios.create({
    baseURL: "http://localhost:8000/portal/api/v1/proveedores/"
});

portalApi.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Token ${token}`; 
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const getAllProveedores = () => portalApi.get('/');
export const createProveedor = (proveedor:any) => portalApi.post('/', proveedor);
