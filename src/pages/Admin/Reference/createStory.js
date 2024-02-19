import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useNavigate, useParams } from "react-router-dom";
import { createStory, getStoryById, updateStory } from "../../../api/adminApi";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../utils/convert";


const CreateStory = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState(editorState);

    const onEditorStateChange = (editorState) => {
        setContent(editorState);
    }

    const handleChangeImage = async (e) => {
        const base64 = await convertToBase64(e);
        setImage(base64);
    }

    const submitCreateStory = async () => {
        try {
            const res = await createStory(name, link, draftToHtml(convertToRaw(content.getCurrentContent())), image)
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
        } catch (e) {
            if (e.response.status === 400) {
                toast.error(e.response.data)
            }
        }
    }

    useEffect(() => {
        const fetchData = async (storyId) => {
            const res = await getStoryById(storyId);
            const data = res.data;
            setName(data.name)
            setLink(data.link)
            setImage(data.image)

            const contentBlocks = convertFromHTML(data.content);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks.contentBlocks,
                contentBlocks.entityMap
            );

            setContent(EditorState.createWithContent(contentState));
        }

        if (param && param.storyId) {
            fetchData(param.storyId);
        }
    }, [param])

    const submitUpdateStory = async () => {
        try {
            const res = await updateStory(param.storyId, name, link, draftToHtml(convertToRaw(content.getCurrentContent())), image)
            if (res.statusCode === 200) {
                toast.success(res.message);
                navigate('/admin/tu-lieu-tham-khao/cau-chuyen-tien-than');
            }
        } catch (e) {
            if (e && e.response && e.response.data) {
                toast.error(e.response.data)
            }
        }
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >{param && param.storyId ? 'Chỉnh sửa câu chuyện' : 'Tạo câu chuyện mới'}</Typography>

            <Box mt={3}>
                <Typography variant="h4" >
                    Tiêu đề câu chuyện
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập tiêu đề câu chuyện"
                    InputLabelProps={{
                        style: { fontSize: 20 }
                    }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Box>

            <Box mt={3}>
                <Typography variant="h4">
                    Link đến câu chuyện
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập link câu chuyện"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </Box>

            <Box mt={3}>
                <Typography variant="h4">
                    Nội dung câu chuyện
                </Typography>
                <Box border={"2px solid black"} marginTop={3}>
                    <Editor
                        editorState={content}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </Box>
            </Box>

            <Box mt={3}>
                <Button
                    variant="contained"
                // component="label"
                >
                    Upload Ảnh
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) => handleChangeImage(e)}
                    />
                </Button>
            </Box>
            <img src={image} width={"200px"} height={"200px"} alt="hình ảnh" />

            {param && param.storyId ?
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitUpdateStory()}
                >Cập nhật câu chuyện</Button>
                :
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitCreateStory()}
                >Tạo câu chuyện</Button>
            }
        </Box>
    );
}

export default CreateStory;