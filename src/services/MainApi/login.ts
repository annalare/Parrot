import baseApi from "./config/api";

interface LoginPayload {
  email: string;
  senha: string;
}
export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}
