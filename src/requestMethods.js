import axios from "axios";

const BASE_URL = "https://equipment-portal.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});