import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, error, login, register, logout } = useContext(AuthContext);
  if (user === "undefined") {
    throw new Error("useAuth must be called within AuthProvider");
  }
  return { user, error, login, register, logout };
};

export default useAuth;
