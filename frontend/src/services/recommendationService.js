import api from "./api";

export const generateRecommendation = () => {
  return api.get("/recommendation/generate");
};

export const getHistory = () => {
  return api.get("/recommendation/history");
};