import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/api/v1/solicitudescompra/"
    }
)

export const getAllSolicitudes = () => portalApi.get('/');
export const getSolicitud = (id: string | undefined) => portalApi.get(`/${id}`);
export const createSolicitud = (solicitud:any) =>  portalApi.post('/', solicitud);
