import ComentRegister from "../../components/ComentRegister";
import ComentsFeed from "../../components/ComentsFeed";
import NavbarParrot from "../../components/NavbarParrot";
import "./feed.scss";

export default function Feed() {
  return (
    <>
      <NavbarParrot />
      <ComentRegister />
      <ComentsFeed/>
    </>
  );
}
