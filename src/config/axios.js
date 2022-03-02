import axios from 'axios';

const productApi = axios.create({
    baseURL: 'http://localhost:4000',
});

export default productApi;
