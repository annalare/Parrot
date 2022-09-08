import { useEffect } from "react";
import NavbarParrot from "../../components/NavbarParrot";
import PostsAll from "../../components/PostsAll";
import PostUser from "../../components/PostUser";

export default function Feed() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.pathname = "/login";
    }
  }, []);

  return (
    <div>
      <NavbarParrot />
      <PostUser />
      <PostsAll />
    </div>
  );
}
