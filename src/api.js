import React from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: `https://backend-a63h.onrender.com/`,
});

export const Batata = async (values) => {
  return await api.get("/blog", values);
};

export const ListBlogId = async (values) => {
  const response = await api.get(`/blog/${values}`);
  const photoUrl = `https://backend-a63h.onrender.com/uploads/${response.data.photo}`;
  return { ...response.data, photoUrl };
};
