import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export const getTodos = () => axios.get(`${API_URL}todos`);

export const getTodo = (id) => axios.get(`${API_URL}todos/${id}`);

export const postTodo = (todo) => axios.post(
    `${API_URL}todos`, { todo }).then((response) => response);

export const deleteTodoById = (id) => axios.delete(
    `${API_URL}todos/${id}`,).then((response) => response);
