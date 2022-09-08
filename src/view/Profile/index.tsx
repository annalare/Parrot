import { useEffect } from "react";
import NavbarParrot from "../../components/NavbarParrot";
import Timeline from "../../components/EmptyFeed";
import Usuario from "../../components/Usuario";
import "./profile.scss";
export default function Profile() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.pathname = "/login";
    }
  }, []);

  return (
    <>
      <NavbarParrot />
      <Usuario />
      <Timeline />
    </>
  );
}
