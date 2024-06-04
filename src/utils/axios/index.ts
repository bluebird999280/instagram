import axios from "axios";

const instance = axios.create({
	baseURL: "http://3.36.121.169:4000/api/",
});

export default instance;
