import axios from "axios";
import store from "../redux/store";

// const port = process.env.REACT_APP_PORT_BE || 3002;
// const domain = `http://localhost:${port}`;

const domain = process.env.REACT_APP_API;

export const createLesson = async (title, url, type, level, chapter, lesson) => {
    const res = await axios({
        method: "post",
        url: `${domain}/lesson`,
        headers: {
            'Authorization': store.getState().auth.access_token ? `Bearer ${store.getState().auth.access_token}` : ''
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

export const getLessonById = async (lessonId) => {
    const res = await axios({
        method: "get",
        url: `${domain}/lesson`,
        params: {
            lessonId: lessonId
        }
    })

    return res.data;
}

export const getTableOfContentLevel = async (level) => {
    const res = await axios({
        method: "get",
        url: `${domain}/tableOfContentLevel`,
        params: {
            level: level
        }
    })

    return res.data;
}

export const getTableOfContentStudy = async (level) => {
    const res = await axios({
        method: "get",
        url: `${domain}/tableOfContentStudy`,
        params: {
            level: level
        }
    })

    return res.data;
}