import axios from "axios";
import store from "../redux/store";

const port = process.env.REACT_APP_PORT_BE || 3002;
const domain = `http://localhost:${port}`;

// const domain = process.env.REACT_APP_API;


export const getAllStory = async () => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story`,
    })
    
    return res.data;
}

export const getStoryByLink = async (link) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story-link`,
        params: {
            link: link
        }
    })
    
    return res.data;
}

export const getStoryLimited = async () => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story-limited`,
    })
    
    return res.data;
}