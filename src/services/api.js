import axios from 'axios';

const PORT = "3001";
const IP = "192.168.0.105";

export const api = axios.create({
    baseURL: `http://${IP}:${PORT}`
})