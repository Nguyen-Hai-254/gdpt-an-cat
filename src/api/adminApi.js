import axios from "axios";
import store from "../redux/store";

// const port = process.env.REACT_APP_PORT_BE || 3002;
// const domain = `http://localhost:${port}`;

const domain = process.env.REACT_APP_API;


export const getAllLesson = async (skip, limit, level, chapter) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/allStudy`,
        params: {
            skip: skip,
            limit: limit,
            level: level,
            chapter: chapter
        }
    })

    return res.data;
}

export const deleteLessonById = async (lessonId) => {
    const res = await axios({
        method: "delete",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/lesson`,
        params: {
            lessonId: lessonId
        }
    })

    return res.data;
}

export const setOrderLesson = async (lessonId, order) => {
    const res = await axios({
        method: "post",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/setOrderLesson`,
        params: {
            lessonId: lessonId
        },
        data: {
            order: order
        }
    })

    return res.data;
}

export const updateLesson = async (lessonId, title, url, type, level, chapter, lesson) => {
    const res = await axios({
        method: "put",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/updateLesson`,
        params: {
            lessonId: lessonId
        },
        data: {
            title: title,
            url: url,
            type: type,
            level: level,
            chapter: chapter,
            lesson: lesson
        }
    })

    return res.data;
}

////////////////////// Game

export const getTroChoi = async () => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/game`,
    })

    return res.data;
}

export const updateTroChoi = async (content) => {
    const res = await axios({
        method: "put",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/game`,
        data: {
            content: content
        }
    })

    return res.data;
}

////////////////////// Story

export const createStory = async (name, link, content, image) => {
    const res = await axios({
        method: "post",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story`,
        data: {
            name: name,
            link: link,
            content: content,
            image: image           
        }
    })

    return res.data;
}

export const deleteStory = async (storyId) => {
    const res = await axios({
        method: "delete",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story`,
        params: {
            storyId: storyId
        }
    })

    return res.data;
}

export const getStoryById = async (storyId) => {
    const res = await axios({
        method: "get",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story-id`,
        params: {
            storyId: storyId
        }
    })

    return res.data;
}

export const updateStory = async (storyId, name, link, content, image) => {
    const res = await axios({
        method: "put",
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
        },
        url: `${domain}/story`,
        params: {
            storyId: storyId
        },
        data: {
            name: name,
            link: link,
            content: content,
            image: image
        }
    })

    return res.data;
}