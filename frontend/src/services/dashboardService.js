import api from "./api";

export const getDashboard = () => {
  return api.get("/user/dashboard");
};