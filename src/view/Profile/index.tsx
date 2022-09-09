import { useCallback, useEffect, useState } from "react";
import NavbarParrot from "../../components/NavbarParrot";
import EmptyFeed from "../../components/EmptyFeed";
import Usuario from "../../components/Usuario";
import "./profile.scss";
import { useParams } from "react-router-dom";
import { pegaUsuarioPorId } from "../../services/userServices";
import { listarTodasAsMensagensPorUsuario } from "../../services/posts";
import PostsAll from "../../components/PostsAll";

interface UserData {
  id: number;
  name: string;
  email: string;
  apartment: number;
}

interface UserMessage {
  id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export default function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userMessage, setUserMessage] = useState<UserMessage[]>([]);

  const fetchProfile = useCallback(async () => {
    const token = window.localStorage.getItem("token");
    const response = await pegaUsuarioPorId(id!, token!)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("erro", err));

    setUserData(response);
  }, [setUserData]);

  const fetchUserMessages = useCallback(async () => {
    const response = await listarTodasAsMensagensPorUsuario(id!)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("erro", err));

    setUserMessage(response);
  }, [setUserMessage]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    fetchUserMessages();
  }, [fetchUserMessages]);

  return (
    <>
      <NavbarParrot />
      <Usuario userData={userData!} qtdMessages={userMessage.length} />
      {userMessage.length ? (
        userMessage.map((message) => (
          <PostsAll
            key={message.id}
            content={message.content}
            created_at={message.created_at}
            name={userData!.name}
            apartment={userData!.apartment}
            id={userData!.id}
          />
        ))
      ) : (
        <EmptyFeed />
      )}
    </>
  );
}
