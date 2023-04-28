import React from "react";
import axios from 'axios';

export const api = axios.create({
    baseURL:`https://backend-a63h.onrender.com/`
})

export const Batata = async (values) => {
    return await api.get("/blog", values);
};