import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyFeed from "../../components/EmptyFeed";
import NavbarParrot from "../../components/NavbarParrot";
import PostsAll from "../../components/PostsAll";
import PostUser from "../../components/PostUser";
import { listaTodasAsMensagens } from "../../services/posts";
import { RootStore } from "../../store";

export default function Feed() {
  const user = useSelector((store: RootStore) => store.userReduce);
  const [messages, setMessages] = useState<any[]>([]);

  const fetchMessages = useCallback(async () => {
    const token = window.localStorage.getItem("token");
    const response = await listaTodasAsMensagens(token!)
      .then((res) => {
        return res.data.reverse();
      })
      .catch((err) => console.log("erro", err));

    setMessages(response);
  }, [setMessages]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  if (user.isLoading) {
    return <div> Loading </div>;
  }

  return (
    <div>
      <NavbarParrot />
      <PostUser setMessages={setMessages} />
      {messages ? (
        messages.map((message) => (
          <PostsAll
            key={message.id}
            id={message.user_id.id}
            content={message.content}
            created_at={message.created_at}
            name={message.user_id.name}
            apartment={message.user_id.apartment}
          />
        ))
      ) : (
        <EmptyFeed />
      )}
    </div>
  );
}
//ajeitar
