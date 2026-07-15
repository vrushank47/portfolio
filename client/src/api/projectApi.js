import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getProjects = async () => {
  const response = await API.get("/projects");
  return response.data;
};