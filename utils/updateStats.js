import { API_URL } from "../config";
import { toast } from "react-toastify";

export const updateDB = async (token, statistics, field, userId) => {
  let formData = new FormData();
  formData.append(`${field}`, JSON.stringify(statistics));
  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    toast.error("Something Went Wrong :(");
  }
};

export const updateLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
