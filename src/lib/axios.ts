import axios from "axios";

//. ->  Crear instancia de axios
const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export default api