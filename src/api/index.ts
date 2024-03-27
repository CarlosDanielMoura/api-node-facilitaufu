import { configDotenv } from "dotenv";
import axios from "axios";

// Load environment variables
configDotenv();

const api = axios.create({
  baseURL: process.env.API_URL,
});

export default api;
