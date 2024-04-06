import axios from "axios";

const baseURL = "http://localhost:5000/api/user";

export const adduser = async (crud) => {
  try {
    const response = await axios.post(`${baseURL}/add`, crud);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSinlgeUser = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id, formData) => {
  try {
    const response = await axios.put(`${baseURL}/update/${id}`, formData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};