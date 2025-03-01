import axios from "axios";

export const apiFetcher = axios.create({
    baseURL: "https://intellislide-ai-api.onrender.com",
  });