import axios from 'axios';

const API_URL = 'https://api.example.com';

export const getServicios = () => {
  return axios.get(`${API_URL}/servicios`);
};
