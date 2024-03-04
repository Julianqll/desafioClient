import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/api/v1/solicitudescompra/"
    }
)


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

export const getAllSolicitudes = () => portalApi.get('/');
export const getSolicitud = (id: string | undefined) => portalApi.get(`/${id}`);
export const createSolicitud = (solicitud:any) =>  portalApi.post('/', solicitud);
