import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddIcon from '@mui/icons-material/Add';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { createMatThu, getMatThuById, updateMatThu } from "../../../api/matThuApi";


const CreateMatThu = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [BV, setBV] = useState("");
    const [keys, setKeys] = useState([]);

    const submitCreateMatThu = async () => {
        try {
            const newOTT = draftToHtml(convertToRaw(OTT.getCurrentContent()));
            const newNW = draftToHtml(convertToRaw(NW.getCurrentContent()));
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === '') {
                    toast.error('Xóa các gợi ý trống hoặc thêm các gợi ý');
                    return;
                }
            }

            const res = await createMatThu(newOTT, newNW, BV, keys);
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
    const [OTT, setOTT] = useState(editorState);
    const [NW, setNW] = useState(editorState);

    const onEditorStateChange = (editorState) => {
        setOTT(editorState);
    }

    const onNWChange = (editorState) => {
        setNW(editorState);
    }

    const handleAddKey = () => {
        setKeys([...keys, ''])
    }

    const handleKeyChange = (index, value) => {
        let newKeys = [...keys];
        newKeys[index] = value;
        setKeys(newKeys);
    }

    const handleDeleteKey = (index) => {
        const findKey = keys.filter((key, index1) =>
            index1 !== index
        )

        setKeys(findKey);
    }

    useEffect(() => {
        const fetchData = async (matThuId) => {
            const res = await getMatThuById(matThuId);
            const data = res.data;

            setBV(data.BV);
            setKeys(data.key);

            let contentBlocks = convertFromHTML(data.OTT);
            let contentState = ContentState.createFromBlockArray(
                contentBlocks.contentBlocks,
                contentBlocks.entityMap
            );
            setOTT(EditorState.createWithContent(contentState));

            contentBlocks = convertFromHTML(data.NW);
            contentState = ContentState.createFromBlockArray(
                contentBlocks.contentBlocks,
                contentBlocks.entityMap
            );
            setNW(EditorState.createWithContent(contentState));
        }
        if (param && param.matThuId) {
            fetchData(param.matThuId);
        }
    }, [param])

    const submitUpdateMatThu = async () => {
        try {
            const newOTT = draftToHtml(convertToRaw(OTT.getCurrentContent()));
            const newNW = draftToHtml(convertToRaw(NW.getCurrentContent()));
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === '') {
                    toast.error('Xóa các gợi ý trống hoặc thêm các gợi ý');
                    return;
                }
            }

            const res = await updateMatThu(param.matThuId, newOTT, newNW, BV, keys);
            if (res.statusCode === 200) {
                toast.success(res.message);
                navigate('/admin/mat-thu');
            }
        } catch (e) {
            if (e && e.response && e.response.data) {
                toast.error(e.response.data)
            }
        }
    }

    return (
        <Box sx={{ maxWidth: '80%' }} margin="0 auto">
            <Typography variant="h1" textAlign={"center"} >{param && param.matThuId ? 'Chỉnh sửa mật thư' : 'Tạo mật thư mới'}</Typography>

            <Box mt={3}>
                <Typography variant="h4">
                    OTT
                </Typography>
                <Box border={"2px solid black"} marginTop={3}>
                    <Editor
                        editorState={OTT}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                        editorStyle={{ height: "200px" }}
                    />
                </Box>

                <Box mt={3}>
                    <Typography variant="h4">
                        NW
                    </Typography>
                    <Box border={"2px solid black"} marginTop={3}>
                        <Editor
                            editorState={NW}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onNWChange}
                            editorStyle={{ height: "200px" }}
                        />
                    </Box>
                </Box>

                <Box mt={3}>
                    <Typography variant="h4" >
                        Bạch văn
                    </Typography>
                    <TextField
                        required
                        sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                        placeholder="Nhập chính xác bạch văn"
                        InputLabelProps={{
                            style: { fontSize: 20 }
                        }}
                        inputProps={{ style: { fontSize: 24 } }}
                        value={BV}
                        onChange={(e) => setBV(e.target.value)}
                    />
                </Box>

                <Box mt={3}>
                    <Typography variant="h4">Các gợi ý (không bắt buộc)</Typography>
                    <Button variant="contained" onClick={() => handleAddKey()} sx={{ display: "block" }}>
                        Thêm gợi ý
                    </Button>
                    {keys.map((keyOption, index) => {
                        return (
                            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                                <TextField
                                    // key={index}
                                    required
                                    sx={{ minWidth: '60%', mt: 1, fontSize: 48 }}
                                    placeholder="Nhập chính xác gợi ý"
                                    InputLabelProps={{
                                        style: { fontSize: 20 }
                                    }}
                                    inputProps={{ style: { fontSize: 24 } }}
                                    value={keyOption}
                                    onChange={(e) => handleKeyChange(index, e.target.value)}
                                />
                                <Button sx={{ ml: 1 }} variant="contained" color="error"
                                    onClick={() => handleDeleteKey(index)}
                                >
                                    Delete
                                </Button>
                            </Box>

                        )
                    })}
                </Box>
            </Box>

            {param && param.matThuId ?
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitUpdateMatThu()}
                >Cập nhật mật thư</Button>
                :
                <Button variant="contained" size="large"
                    sx={{
                        fontSize: 16,
                        mt: 3
                    }}
                    startIcon={<AddIcon />}
                    onClick={() => submitCreateMatThu()}
                >Tạo mật thư</Button>
            }
        </Box>
    );
}

export default CreateMatThu;