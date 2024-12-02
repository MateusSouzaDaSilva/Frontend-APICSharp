import Axios from 'axios';

const createAxios = Axios.create({
    baseURL: "https://localhost:7212"
})

export default createAxios;