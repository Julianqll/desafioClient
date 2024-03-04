import axios from 'axios';

const portalApi = axios.create(
    {
        baseURL:"http://localhost:8000/portal/"
    }
)

export const login = (userData: any) => portalApi.post('/login/', userData);
export const logout = () => {
    const token = localStorage.getItem('token'); 
    return portalApi.post('/logout/', {}, { 
        headers: {
            Authorization: `Token ${token}` 
        }
    });
};