import axios from 'axios';

const apiUrl = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
});

export default apiUrl;