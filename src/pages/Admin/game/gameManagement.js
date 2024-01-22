import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { getLessonById } from "../../../api/lessonApi";
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { updateLesson } from "../../../api/adminApi";


const GameManagement = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [chapter, setChapter] = useState("");

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState(editorState);

    const onEditorStateChange = (editorState) => {
        setContent(editorState);
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

            const contentBlocks = convertFromHTML(data.content);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks.contentBlocks,
                contentBlocks.entityMap
            );

            setContent(EditorState.createWithContent(contentState));
        }
        if (param && param.lessonId) {
            fetchData(param.lessonId);
        }
    }, [param])

    const submitEditGame = async () => {
        try {
            const res = await updateLesson(param.lessonId, title, url, type, level, chapter, draftToHtml(convertToRaw(content.getCurrentContent())))
            if (res.statusCode === 200) {
                toast.success(res.message);
                navigate('/admin');
            }
        } catch (e) {
            if (e && e.response && e.response.data) {
                toast.error(e.response.data)
            }
        }
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >Chỉnh sửa danh sách trò chơi</Typography>

            <Box mt={3}>
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
                    mt: 3,
                    mb: 3
                }}
                startIcon={<AddIcon />}
                onClick={() => submitEditGame()}
            >Cập nhật trò chơi</Button>
        </Box>
    );
}

export default GameManagement;