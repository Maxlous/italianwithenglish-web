import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (user) => {};

  const login = async ({ email: identifier, password }) => {};

  const logout = async () => {};

  const checkUserLoggedIn = async () => {};

  return (
    <AuthContext.Provider value={(user, error, register, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
