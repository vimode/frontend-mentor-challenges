import axios from "axios";

const baseurl = "/api/todos";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};
// TODO: abstract config

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseurl, config);
  return response.data;
};

const create = async (newTodo) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseurl, newTodo, config);
  return response.data;
};

const remove = async (todoItem) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseurl}/${todoItem.id}`, config);
  return response.status;
};

const update = async (todoItem) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseurl}/${todoItem.id}`,
    todoItem,
    config
  );
  return response.data;
};

const clearCompleted = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseurl}/clearCompleted`, config);
  return response.status;
};

export default { setToken, getAll, create, remove, update, clearCompleted };
