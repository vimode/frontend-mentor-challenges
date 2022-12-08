import axios from "axios"
const  baseURL = "http://localhost:6003/api/users"

const register =  async (userDetails) => {
  const response = await axios.post(baseURL, userDetails);
  return response.data
}

export default { register }
