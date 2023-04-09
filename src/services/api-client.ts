import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c0878f9aeb34b26babaac44584b7cec'
    }
})