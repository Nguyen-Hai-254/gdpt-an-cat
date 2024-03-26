import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { createLesson, getLessonById } from "../../../api/lessonApi";
import { ContentState, EditorState, convertFromHTML, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { updateLesson } from "../../../api/adminApi";
import { convertToBase64 } from "../../../utils/convert";


const getEntities = (editorState, entityType = null) => {
    const content = editorState.getCurrentContent();
    const entities = [];
    content.getBlocksAsArray().forEach((block) => {
        let selectedEntity = null;
        block.findEntityRanges(
            (character) => {
                if (character.getEntity() !== null) {
                    const entity = content.getEntity(character.getEntity());
                    if (!entityType || (entityType && entity.getType() === entityType)) {
                        selectedEntity = {
                            entityKey: character.getEntity(),
                            blockKey: block.getKey(),
                            entity: content.getEntity(character.getEntity()),
                        };
                        return true;
                    }
                }
                return false;
            },
            (start, end) => {
                entities.push({ ...selectedEntity, start, end });
            });
    });
    return entities;
};

const CreateGocVuonLam = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState([editorState]);

    const onEditorStateChange = (editorState) => {
        let newContent = [...content]

        newContent[0] = editorState
        console.log(newContent)
        setContent([editorState]);
    }

    const [docs, setDocs] = useState([{ content: EditorState.createEmpty(), image: '' }])

    const handleChangeDocs = async (index, field, e) => {
        let newDocs = [...docs]
        // console.log(convertToRaw(e.getCurrentContent()))

        if (field === 'content') {
            // console.log('e', e);
            // const contentState = e.getCurrentContent()
            // const entityKeys = Object.keys(convertToRaw(contentState).entityMap)
            let json = EditorState.createWithContent(convertFromRaw(e))
            // console.log(json)

            // const contentBlocks = convertFromHTML(convertFromRaw(e));
            // const contentBlocks = convertFromHTML(json);
            // const contentState = ContentState.createFromBlockArray(
            //     contentBlocks.contentBlocks,
            //     contentBlocks.entityMap
            // );
            let a = draftToHtml(convertToRaw(editorState.getCurrentContent()))
            console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
            // const contentBlocks = draftToHtml(convertToRaw(e.getCurrentContent()))
            // console.log(contentBlocks);

            // console.log(EditorState.createWithContent(contentState));
            newDocs[index][field] = editorState.getCurrentContent()
            // console.log(newDocs);
            setDocs(newDocs)
        }
        else {
            const base64 = await convertToBase64(e);
            newDocs[index][field] = base64
            setDocs(newDocs)
        }
        // console.log(docs);
    }

    const submitCreateGocVuonLam = async () => {
        //     try {
        //         const res = await createLesson(title, url, draftToHtml(convertToRaw(content.getCurrentContent())))
        //         if (res.statusCode === 200) {
        //             toast.success(res.message)
        //         }
        //     } catch (e) {
        //         if (e.response.status === 400) {
        //             toast.error(e.response.data)
        //         }
        //     }
    }



    useEffect(() => {
        //     const fetchData = async (lessonId) => {
        //         const res = await getLessonById(lessonId);
        //         const data = res.data;
        //         setTitle(data.title);
        //         setUrl(data.url);

        //         const contentBlocks = convertFromHTML(data.content);
        //         const contentState = ContentState.createFromBlockArray(
        //             contentBlocks.contentBlocks,
        //             contentBlocks.entityMap
        //         );

        //         setContent(EditorState.createWithContent(contentState));
        //     }
        //     if (param && param.gocVuonLamIdId) {
        //         fetchData(param.gocVuonLamIdId);
        //     }
    }, [param])

    const submitUpdateLesson = async () => {
        // try {
        //     const res = await updateLesson(param.lessonId, title, url, draftToHtml(convertToRaw(content.getCurrentContent())))
        //     if (res.statusCode === 200) {
        //         toast.success(res.message);
        //         navigate('/admin/tu-hoc');
        //     }
        // } catch (e) {
        //     if (e && e.response && e.response.data) {
        //         toast.error(e.response.data)
        //     }
        // }
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >{param && param.gocVuonLamId ? 'Chỉnh sửa góc vườn lam' : 'Tạo góc vườn lam'}</Typography>

            <Box mt={3}>
                <Typography variant="h4" >
                    Tiêu đề góc vườn lam
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập tiêu đề góc vườn lam"
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
                    Link đến góc vườn lam
                </Typography>
                <TextField
                    required
                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập link góc vườn lam"
                    InputLabelProps={{ style: { fontSize: 20 } }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Box>

            <Typography variant="h4" mt={3}>
                Nội dung
            </Typography>
            {docs.map((doc, index) => {
                return (
                    <Box key={index}>
                        {/* <Box mt={3} > */}
                        <Box border={"2px solid black"} marginTop={3} height={'55%'}>
                            <Editor
                                editorState={docs[0].content}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                // onEditorStateChange={() => onEditorStateChange()}
                                // onEditorStateChange={onEditorStateChange}
                                onChange={(newEditorState) => handleChangeDocs(index, 'content', newEditorState)}
                                editorStyle={{ height: "90%" }}
                            />
                        </Box>
                        {/* </Box> */}

                        <Box mt={3}>
                            <Button
                                variant="contained"
                            >
                                Upload Ảnh
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => handleChangeDocs(index, 'image', e)}
                                />
                            </Button>
                        </Box>
                        <img src={doc.image} width={"200px"} height={"200px"} alt="hình ảnh" />
                    </Box>
                )
            })}

            {param && param.lessonId ?
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitUpdateLesson()}
                >Cập nhật góc vườn lam</Button>
                :
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitCreateGocVuonLam()}
                >Tạo góc vườn lam</Button>
            }
        </Box>
    );
}

export default CreateGocVuonLam;