import baseApi from "./api";

interface LoginPayload {
  email: string;
  password: string;
}

interface CadastroUsuario {
  name: string;
  email: string;
  password: string;
  apartment: number;
}

export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}

export function cadastro(payload: CadastroUsuario) {
  return baseApi.post("/user", payload);
}

export function pegaUsuarioPorId(id: string | null, token: string | null) {
  return baseApi.get(`user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
