import axios from "axios";

const port = process.env.PORT_BE || 3002;
const domain = `http://localhost:${port}`;

export const createLesson = async (title, url, type, level, chapter, content) => {
    const res = await axios({
        method: "post",
        url: `${domain}/lesson`,
        data: {
            title: title,
            url: url,
            type: type,
            level: level,
            chapter: chapter,
            content: content
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