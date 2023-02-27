import axios from "axios";
import { mainModule } from "process";

export const DEV_API = "http://localhost:5000";

// export const DEV_API = "http://104.248.91.88/";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
  // withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
});

// export const $imageApi = "https://adu24file.ams3.digitaloceanspaces.com";
