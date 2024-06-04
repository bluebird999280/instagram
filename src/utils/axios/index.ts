import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.PROD ? `http://${import.meta.env.VITE_SERVER_ADDRESS}:4000/api` : "http://localhost:4000/api/",
});

export default instance;
