// import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import AddIcon from '@mui/icons-material/Add';
// import { createLesson, getLessonById } from "../../api/lessonApi";
// import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// import { typeLesson, typeLevel, typeChapter } from "../../utils/tuHoc";
// import { toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateLesson } from "../../api/adminApi";


// const CreateLesson = () => {
//     const param = useParams();
//     const navigate = useNavigate();

//     const [title, setTitle] = useState("");
//     const [url, setUrl] = useState("");
//     const [type, setType] = useState("");
//     const [level, setLevel] = useState("");
//     const [chapter, setChapter] = useState("");

//     const submitCreateLesson = async () => {
//         try {
//             const res = await createLesson(title, url, type, level, chapter, draftToHtml(convertToRaw(content.getCurrentContent())))
//             if (res.statusCode === 200) {
//                 toast.success(res.message)
//             }
//         } catch (e) {
//             if (e.response.status === 400) {
//                 toast.error(e.response.data)
//             }
//         }
//     }

//     let editorState = EditorState.createEmpty();
//     const [content, setContent] = useState(editorState);

//     const onEditorStateChange = (editorState) => {
//         setContent(editorState);
//     }

//     useEffect(() => {
//         const fetchData = async (lessonId) => {
//             const res = await getLessonById(lessonId);
//             const data = res.data;
//             setTitle(data.title);
//             setUrl(data.url);
//             setType(data.type);
//             setLevel(data.level);
//             setChapter(data.chapter);

//             const contentBlocks = convertFromHTML(data.content);
//             const contentState = ContentState.createFromBlockArray(
//                 contentBlocks.contentBlocks,
//                 contentBlocks.entityMap
//             );

//             setContent(EditorState.createWithContent(contentState));
//         }
//         if (param && param.lessonId) {
//             fetchData(param.lessonId);
//         }
//     }, [param])

//     const submitUpdateLesson = async () => {
//         try {
//             const res = await updateLesson(param.lessonId, title, url, type, level, chapter, draftToHtml(convertToRaw(content.getCurrentContent())))
//             if (res.statusCode === 200) {
//                 toast.success(res.message);
//                 navigate('/admin/tu-hoc');
//             }
//         } catch (e) {
//             if (e && e.response && e.response.data) {
//                 toast.error(e.response.data)
//             }
//         }
//     }

//     return (
//         <Box sx={{ maxWidth: '80%' }} margin="0 auto">
//             <Typography variant="h1" textAlign={"center"} >{param && param.lessonId ? 'Chỉnh sửa bài học' : 'Tạo bài học mới'}</Typography>

//             <Box mt={3}>
//                 <Typography variant="h4" >
//                     Tiêu đề bài học
//                 </Typography>
//                 <TextField
//                     required
//                     sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
//                     placeholder="Nhập tiêu đề bài học"
//                     InputLabelProps={{
//                         style: { fontSize: 20 }
//                     }}
//                     inputProps={{ style: { fontSize: 24 } }}
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//             </Box>

//             <Box mt={3}>
//                 <Typography variant="h4">
//                     Link đến bài học
//                 </Typography>
//                 <TextField
//                     required
//                     sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
//                     placeholder="Nhập link bài học"
//                     InputLabelProps={{ style: { fontSize: 20 } }}
//                     inputProps={{ style: { fontSize: 24 } }}
//                     value={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                 />
//             </Box>

//             <Grid container spacing={2} mt={3} columnSpacing={{ xs: 1, md: 3 }}>
//                 <Grid item md={4} sm={12}>
//                     <Typography variant="h4">Chương trình tu học</Typography>
//                     <Select
//                         sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
//                         value={type}
//                         onChange={(e) => setType(e.target.value)}
//                         required
//                     >
//                         {typeLesson.map((item, index) => {
//                             return (
//                                 <MenuItem key={index} sx={{ fontSize: 14 }} value={item.value}>{item.value}</MenuItem>
//                             )
//                         })
//                         }
//                     </Select>
//                 </Grid>
//                 <Grid item md={4} sm={12}>
//                     <Typography variant="h4">Bậc học</Typography>
//                     <Select
//                         sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
//                         value={level}
//                         onChange={(e) => setLevel(e.target.value)}
//                         required
//                     >
//                         {typeLevel.map((levelLesson, index) => {
//                             return (
//                                 <MenuItem key={index} sx={{ fontSize: 14 }} value={levelLesson.value}>{levelLesson.value}</MenuItem>
//                             )
//                         })
//                         }
//                     </Select>
//                 </Grid>
//                 <Grid item md={4} sm={12}>
//                     <Typography variant="h4">Học phần</Typography>
//                     <Select
//                         sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
//                         value={chapter}
//                         onChange={(e) => setChapter(e.target.value)}
//                         required
//                     >
//                         {typeChapter.map((item, index) => {
//                             return (
//                                 <MenuItem key={index} sx={{ fontSize: 14 }} value={item.value}>{item.value}</MenuItem>
//                             )
//                         })
//                         }
//                     </Select>
//                 </Grid>
//             </Grid>

//             <Box mt={3}>
//                 <Typography variant="h4">
//                     Nội dung bài học
//                 </Typography>
//                 <Box border={"2px solid black"} marginTop={3} >
//                     <Editor
//                         editorState={content}
//                         toolbarClassName="toolbarClassName"
//                         wrapperClassName="wrapperClassName"
//                         editorClassName="editorClassName"
//                         onEditorStateChange={onEditorStateChange}
//                     />
//                 </Box>
//             </Box>

//             {param && param.lessonId ?
//                 <Button variant="contained" size="large"
//                     sx={{
//                         fontSize: 16,
//                         mt: 3
//                     }}
//                     startIcon={<AddIcon />}
//                     onClick={() => submitUpdateLesson()}
//                 >Cập nhật bài học</Button>
//                 :
//                 <Button variant="contained" size="large"
//                     sx={{
//                         fontSize: 16,
//                         mt: 3
//                     }}
//                     startIcon={<AddIcon />}
//                     onClick={() => submitCreateLesson()}
//                 >Tạo bài học</Button>
//             }
//         </Box>
//     );
// }

// export default CreateLesson;





import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { createLesson, getLessonById } from "../../api/lessonApi";
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { typeLesson, typeLevel, typeChapter } from "../../utils/tuHoc";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { updateLesson } from "../../api/adminApi";
import { convertToBase64 } from "../../utils/convert";
import styled from "styled-components";


const CustomEditor = styled.div`
.rdw-editor-main {
    height: 450px;
}
`;

const CreateLesson = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [chapter, setChapter] = useState("");

    const submitCreateLesson = async () => {
        try {
            const newLesson = lesson.map(item => ({ ...item, content: draftToHtml(convertToRaw(item.content.getCurrentContent())) }))
            const res = await createLesson(title, url, type, level, chapter, newLesson)
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
        } catch (e) {
            if (e.response.status === 400) {
                toast.error(e.response.data)
            }
        }
    }

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState(editorState);
    const [image, setImage] = useState("");

    const [lesson, setLesson] = useState([{ image, content }])

    const onEditorStateChange = (editorState, index) => {
        setLesson(prevLesson => {
            const updatedLesson = [...prevLesson];
            updatedLesson[index] = {
                ...updatedLesson[index],
                content: editorState
            };

            return updatedLesson;
        });
    }

    const setImageFromAPI = (image, index) => {
        setLesson(prevLesson => {
            const updatedLesson = [...prevLesson];
            updatedLesson[index] = {
                ...updatedLesson[index],
                image: image
            };

            return updatedLesson;
        });
    }

    useEffect(() => {
        const fetchData = async (lessonId) => {
            const res = await getLessonById(lessonId);
            const data = res.data;
            setTitle(data.title);
            setUrl(data.url);
            setType(data.type);
            setLevel(data.level);
            setChapter(data.chapter);

            data.lesson.map((item, index) => {
                console.log(item)
                const contentBlocks = convertFromHTML(item.content);
                const contentState = ContentState.createFromBlockArray(
                    contentBlocks.contentBlocks,
                    contentBlocks.entityMap
                );
                onEditorStateChange(EditorState.createWithContent(contentState), index)
                // setContent(EditorState.createWithContent(contentState));
                setImageFromAPI(item.image, index)

                return lesson;
            })

        }
        if (param && param.lessonId) {
            fetchData(param.lessonId);
        }
    }, [param])

    const submitUpdateLesson = async () => {
        try {
            const newLesson = lesson.map(item => ({ ...item, content: draftToHtml(convertToRaw(item.content.getCurrentContent())) }))
            const res = await updateLesson(param.lessonId, title, url, type, level, chapter, newLesson)
            if (res.statusCode === 200) {
                toast.success(res.message);
                navigate('/admin/tu-hoc');
            }
        } catch (e) {
            if (e && e.response && e.response.data) {
                toast.error(e.response.data)
            }
        }
    }

    const handleChangeImage = async (e, index) => {
        const base64 = await convertToBase64(e);
        setLesson(prevLesson => {
            const updatedLesson = [...prevLesson];
            updatedLesson[index] = {
                ...updatedLesson[index],
                image: base64
            };

            return updatedLesson;
        });
    }

    const addLessonContent = () => {
        let prevLesson = [...lesson];
        const newLesson = { image: '', content: EditorState.createEmpty() }
        prevLesson.push(newLesson);
        setLesson(prevLesson);
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >{param && param.lessonId ? 'Chỉnh sửa bài học' : 'Tạo bài học mới'}</Typography>

            <Box mt={3}>
                <Typography variant="h4" >
                    Tiêu đề bài học
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập tiêu đề bài học"
                    InputLabelProps={{
                        style: { fontSize: 20 }
                    }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Box>

            <Box mt={3}>
                <Typography variant="h4">
                    Link đến bài học
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập link bài học"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Box>

            <Grid container spacing={2} mt={3} columnSpacing={{ xs: 1, md: 3 }}>
                <Grid item md={4} sm={12}>
                    <Typography variant="h4">Chương trình tu học</Typography>
                    <Select
                        sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        {typeLesson.map((item, index) => {
                            return (
                                <MenuItem key={index} sx={{ fontSize: 14 }} value={item.value}>{item.value}</MenuItem>
                            )
                        })
                        }
                    </Select>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Typography variant="h4">Bậc học</Typography>
                    <Select
                        sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                    >
                        {typeLevel.map((levelLesson, index) => {
                            return (
                                <MenuItem key={index} sx={{ fontSize: 14 }} value={levelLesson.value}>{levelLesson.value}</MenuItem>
                            )
                        })
                        }
                    </Select>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Typography variant="h4">Học phần</Typography>
                    <Select
                        sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                        required
                    >
                        {typeChapter.map((item, index) => {
                            return (
                                <MenuItem key={index} sx={{ fontSize: 14 }} value={item.value}>{item.value}</MenuItem>
                            )
                        })
                        }
                    </Select>
                </Grid>
            </Grid>

            {lesson && lesson.length > 0 && lesson.map((item, index) => {
                return (
                    <Box key={index}>
                        <Box mt={3}>
                            <Typography variant="h4">
                                Nội dung bài học
                            </Typography>
                            <CustomEditor>
                                <Box border={"2px solid black"} marginTop={3} height="500px">
                                    <Editor
                                        editorState={item.content}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="rdw-editor-main"
                                        onEditorStateChange={(editorState) => onEditorStateChange(editorState, index)}
                                    />
                                </Box>
                            </CustomEditor>
                        </Box>

                        <Box mt={3}>
                            <Button
                                variant="contained"
                            >
                                Upload Ảnh
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => handleChangeImage(e, index)}
                                />
                            </Button>
                        </Box>
                        <img src={item.image} width={"200px"} height={"200px"} alt="hình ảnh" />
                    </Box>
                )
            })}

            <Box>
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => addLessonContent()}
                >Viết thêm nội dung</Button>
            </Box>

            {param && param.lessonId ?
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitUpdateLesson()}
                >Cập nhật bài học</Button>
                :
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitCreateLesson()}
                >Tạo bài học</Button>
            }
        </Box>
    );
}

export default CreateLesson;