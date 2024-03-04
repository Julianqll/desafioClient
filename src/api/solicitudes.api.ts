import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/api/v1/solicitudescompra/"
    }
)

export const getAllSolicitudes = () => portalApi.get('/');
export const createProveedor = (proveedor:any) =>  portalApi.post('/', proveedor);
