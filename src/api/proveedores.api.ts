import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/api/v1/proveedores/"
    }
)

export const getAllProveedores = () => portalApi.get('/');
export const createProveedor = (proveedor:any) =>  portalApi.post('/', proveedor);
