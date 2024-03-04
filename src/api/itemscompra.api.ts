import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/api/v1/itemcompras/"
    }
)

export const createItems = (itemcompras:any) =>  portalApi.post('/', itemcompras);
