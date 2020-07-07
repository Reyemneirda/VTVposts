import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function setToken(jwt: string) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearToken(jwt: string) {
  delete api.defaults.headers.common["Authorization"];
}
