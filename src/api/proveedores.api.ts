import axios from 'axios';

export const getAllProveedores = () => {
    return axios.get('http://localhost:8000/portal/api/v1/proveedores');

}