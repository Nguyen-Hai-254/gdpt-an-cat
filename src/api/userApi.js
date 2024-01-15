import axios from "axios";
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import store from "../redux/store";

const port = process.env.PORT_BE || 3002;
const domain = `http://localhost:${port}`;


const baseQuery = fetchBaseQuery({
    prepareHeaders: async (headers, { getState }) => {
        const token = await getState().auth.token;
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        return headers;
    },
});

export const signup = async (email, password, confirmPassword, name) => {
    const res = await axios({
        method: "post",
        url: `${domain}/signup`,
        data: {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            name: name
        }
    })

    return res.data;
}

export const login = async (email, password) => {
    const res = await axios({
        method: "post",
        url: `${domain}/login`,
        data: {
            email: email,
            password: password
        }
    })

    return res.data;
}

export const getMatThu = async () => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThu`,
    })

    return res.data;
}