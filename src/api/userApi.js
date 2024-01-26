import axios from "axios";
import store from "../redux/store";

const port = process.env.REACT_APP_PORT_BE || 3002;
const domain = `http://localhost:${port}`;

// const domain = process.env.REACT_APP_API;

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

export const getProfile = async () => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/profile`,
    })

    return res.data;
}

export const updateProfile = async (name, email, address) => {
    const res = await axios({
        method: "put",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/profile`,
        data: {
            email: email,
            name: name,
            address: address
        }
    })

    return res.data;
}