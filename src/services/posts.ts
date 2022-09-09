import baseApi from "./api";

interface MensagePost {
  content: string;
  id: string | null;
  token: string | null;
}

const token = window.localStorage.getItem("token");

export function mensagem({ content, id, token }: MensagePost) {
  return baseApi.post(
    `/post/user/${id}`,
    {
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function listaTodasAsMensagens(token: string) {
  return baseApi.get("/post", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function listarTodasAsMensagensPorUsuario(id: string) {
  return baseApi.get(`/post/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
