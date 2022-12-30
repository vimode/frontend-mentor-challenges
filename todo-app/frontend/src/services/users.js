import axios from "axios";
const baseURL = "/api/users";

const register = async (userDetails) => {
  const response = await axios.post(baseURL, userDetails);
  return response.data;
};

export default { register };
