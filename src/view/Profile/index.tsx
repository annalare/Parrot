import NavbarParrot from "../../components/NavbarParrot";
import Timeline from "../../components/EmptyFeed";
import Usuario from "../../components/Usuario";
import "./profile.scss";
export default function Profile() {
  return (
    <>
      <NavbarParrot />
      <Usuario />
      <Timeline />
    </>
  );
}
