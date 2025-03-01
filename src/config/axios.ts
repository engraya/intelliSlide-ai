import axios from "axios";

export const apiFetcher = axios.create({
    baseURL: "http://localhost:8000",
  });