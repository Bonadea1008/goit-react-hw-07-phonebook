import axios from 'axios';

const BASE_URL = 'https://644425a9466f7c2b4b62de26.mockapi.io';

export const getContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);

    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createContacts = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteContacts = async id => {
  try {
    const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
