import { API_URL } from "../config";

export const getLocalStorage = (key) => {
  const storage = localStorage.getItem(key);
  return JSON.parse(storage);
};

export const getDB = async (key, token) => {
  const res = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return JSON.parse(data[key]);
};
