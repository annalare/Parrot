import baseApi from "./api";

interface LoginPayload {
  email: string;
  password: string;
}
export function login(payload: LoginPayload) {
  console.log(payload);
  return baseApi.post("/login", payload);
}

interface MensagePost {
  mensage: string;
}

export function mensagem(payload: MensagePost) {
  return baseApi.post("/mensage", payload);
}
