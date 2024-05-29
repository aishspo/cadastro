import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ajuste conforme necessário
});

export const createAluno = async (data: { nome: string; email: string; senha: string }) => {
  return api.post('/alunos', data);
};

export default api;
