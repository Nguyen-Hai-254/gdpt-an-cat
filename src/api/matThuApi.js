import axios from "axios";
import store from "../redux/store";

// const port = process.env.REACT_APP_PORT_BE || 3002;
// const domain = `http://localhost:${port}`;

const domain = process.env.REACT_APP_API;


export const createMatThu = async (OTT, NW, BV, key) => {
    const res = await axios({
        method: "post",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThu`,
        data: {
            OTT: OTT,
            NW: NW,
            BV: BV,
            key: key
        }
    })

    return res.data;
}

export const getAllMatThu = async (skip, limit) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThu`,
        params: {
            skip: skip,
            limit: limit
        }
    })

    return res.data;
}

export const updateMatThu = async (id, OTT, NW, BV, key) => {
    const res = await axios({
        method: "put",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThu`,
        params: {
            id: id
        },
        data: {
            OTT: OTT,
            NW: NW,
            BV: BV,
            key: key
        }
    })

    return res.data;
}

export const deleteMatThu = async (matThuId) => {
    const res = await axios({
        method: "delete",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThu`,
        params: {
            id: matThuId
        }
    })

    return res.data;
}

export const getMatThuById = async (matThuId) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThuById`,
        params: {
            id: matThuId
        }
    })

    return res.data;
}

export const getMatThuByUser = async (STT) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/matThuByUser`,
        params: {
            STT: STT
        }
    })

    return res.data;
}

export const submitMatThu = async (matThuId, BV) => {
    const res = await axios({
        method: "post",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/submitMatThu`,
        params: {
            matThuId: matThuId
        },
        data: {
            BV: BV
        }
    })

    return res.data;
}