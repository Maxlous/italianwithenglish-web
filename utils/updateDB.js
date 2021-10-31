import { API_URL } from "../config";
import { toast } from "react-toastify";

const updateDB = async (token, statistics) => {
  const res = await fetch(`${API_URL}/willchange`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: { stats: JSON.stringify(statistics) },
  });

  if (!res.ok) {
    toast.error("Something Went Wrong :(");
  }
};
export default updateDB;
