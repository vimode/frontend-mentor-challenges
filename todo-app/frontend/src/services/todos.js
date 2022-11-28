import axios from "axios";

const baseurl = "http://localhost:6003/api/todos";

const getAll = async () => {
  const response = await axios.get(baseurl);
  return response.data;
};

const create = async (newTodo) => {
  const response = await axios.post(baseurl, newTodo);
  return response.data;
};

const remove = async (todoItem) => {
  const response = await axios.delete(`${baseurl}/${todoItem.id}`);
  return response.status;
};

const update = async (todoItem) => {
  const response = await axios.put(`${baseurl}/${todoItem.id}`, todoItem);
  return response.data;
};

const clearCompleted = async () => {
  const response = await axios.delete(`${baseurl}/clearCompleted`);
  return response.status;
}

export default { getAll, create, remove, update, clearCompleted };
