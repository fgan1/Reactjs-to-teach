import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-test-ad648.firebaseio.com/'
});

export default instance;