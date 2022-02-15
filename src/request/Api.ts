import axios, { AxiosInstance } from "axios";

/**
 * Create an Axios instance for the api.
 */
const createAPI = (): AxiosInstance => {
    return axios.create({ baseURL: "http://localhost:4000" });
};

/**
 * api constant is the axios-instance used for all requests to the rest-api.
 */
const api: AxiosInstance = createAPI();

export default api;