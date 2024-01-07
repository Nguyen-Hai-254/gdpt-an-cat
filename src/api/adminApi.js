import axios from "axios";

const port = process.env.PORT_BE || 3002;
const domain = `http://localhost:${port}`;

export const getAllLesson = async (skip, limit, level, chapter) => {
    console.log("level and chapter", level, chapter)
    const res = await axios({
        method: "get",
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