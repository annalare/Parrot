import baseApi from "./api";

const token = window.localStorage.getItem("token");

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

interface EditarUsuario {
  name?: string;
  email?: string;
  password?: string;
  apartment?: number;
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

export function editarUsuario(id: number, payload: EditarUsuario) {
  return baseApi.put(`user/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
