import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes";
import { getUser } from "./store/modules/users";

function App() {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
