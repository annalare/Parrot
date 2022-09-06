import axios from "axios";

const baseApi = axios.create({
  baseURL: "",
});
export default baseApi;
