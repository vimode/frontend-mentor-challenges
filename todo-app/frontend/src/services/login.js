import axios from "axios";
const baseURL = "http://localhost:6003/api/login";
const baseUserURL = "http://localhost:6003/api/users"

const login = async (credentials) => {
  const response = await axios.post(baseURL, credentials);
  return response.data;
};

const loggedInData = async (user) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}`},
  };
  const response = await axios.get(`${baseUserURL}/${user.id}`, config);
  return response.data;
};

export default { login, loggedInData };
