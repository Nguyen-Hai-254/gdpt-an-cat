import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { createLesson } from "../../api/lessonApi";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { typeLesson, typeLevel, typeChapter } from "../../utils/tuHoc";
import Toastify from "../../components/toastify/toastify";
import { toast } from "react-toastify";


const CreateLesson = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [chapter, setChapter] = useState("");

    const submitCreateLesson = async () => {
        try {
            const res = await createLesson(title, url, type, level, chapter, draftToHtml(convertToRaw(content.getCurrentContent())))
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
        } catch (e) {
            console.log(e)
            if (e.response.status === 400) {
                toast.error(e.response.data)
            }
        }
    }

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState(editorState);

    const onEditorStateChange = (editorState) => {
        setContent(editorState);
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >Tạo bài học mới </Typography>

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

            <Box mt={3}>
                <Typography variant="h4">
                    Nội dung bài học
                </Typography>
                <Box border={"2px solid black"} marginTop={3} >
                    <Editor
                        editorState={content}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </Box>
            </Box>

            <Button variant="contained" size="large"
                sx={{
                    fontSize: 16,
                    mt: 3
                }}
                startIcon={<AddIcon />}
                onClick={() => submitCreateLesson()}
            >Tạo bài học</Button>
            <Toastify />
        </Box>
    );
}

export default CreateLesson;