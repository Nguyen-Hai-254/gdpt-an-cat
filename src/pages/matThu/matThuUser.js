import { useEffect, useState } from "react"
import DOMPurify from "dompurify";
import { Box, Button, Container, Modal, TextField, Typography } from "@mui/material";
import { getMatThuByUser, submitMatThu } from "../../api/matThuApi";
import SidebarMatThu from "../../components/sidebarMatThu";
import { toast } from "react-toastify";


function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html)
    }
}

const MatThuUser = () => {
    const [data, setData] = useState({});
    const [BV, setBV] = useState('');
    const [error, setError] = useState('');

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [total, setTotal] = useState(0);
    const [currentMatThu, setCurrentMatThu] = useState(0);

    const handleSubmitMatThu = async () => {
        try {
            if (BV === '') {
                setError('Bạch văn trống!');
                return;
            }
            const res = await submitMatThu(data._id, BV);

            if (res.statusCode === 200) {
                setError('');
                handleOpen();
                setMessage(res.message);
                setBV('')
            }
        } catch (e) {
            if (e && e.response && e.response.data) {
                setError(e.response.data);
            }
        }
    }

    const fetchData = async () => {
        try {
            const res = await getMatThuByUser();
            setData(res.data)
            setTotal(res.totalMatThu);
            setCurrentMatThu(res.currentMatThu);
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const nextMatThu = (index) => {
        handleClose();
        handleGetMatThu(index);
    }

    const cancelButton = async () => {
        handleClose()
        if (currentMatThu === data.STT - 1) {
            setCurrentMatThu(data.STT)
        }
    }

    const handleGetMatThu = async (index) => {
        try {
            const res = await getMatThuByUser(index);
            setData(res.data)
            setTotal(res.totalMatThu);
            setCurrentMatThu(res.currentMatThu);
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    return (
        <Container sx={{
            maxWidth: '100% !important',
            display: 'flex',
            mt: 5,
            ml: 0,
            pl: 0,
            pr: 1,
        }}>
            <SidebarMatThu currentMatThu={currentMatThu} total={total} getMatThu={handleGetMatThu} />
            <Box sx={{
                ml: 2,
                width: { xs: "90%", md: "50%" }
            }}
            >
                <Typography
                    sx={{ textTransform: "capitalize", textAlign: "center" }} variant="h2">
                    {data && data.STT ? 'Mật thư số ' + data.STT : ''}
                </Typography>

                <Typography variant="h4" mt={3}>OTT: </Typography>
                <Box
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data.OTT)}>
                </Box>
                <Typography variant="h4" mt={3}>NW</Typography>
                <Box
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data.NW)}>
                </Box>

                <TextField
                    required
                    sx={{ minWidth: '90%', mt: 1, fontSize: 48 }}
                    placeholder="Nhập chính xác bạch văn"
                    InputLabelProps={{
                        style: { fontSize: 20 }
                    }}
                    inputProps={{ style: { fontSize: 24 } }}
                    value={BV}
                    onChange={(e) => setBV(e.target.value)}
                />

                <Typography color={"red"} variant="h6">{error}</Typography>

                <Box sx={{ width: "100%", textAlign: "center", mt: "20px" }}>
                    <Button variant="contained"
                        onClick={() => handleSubmitMatThu()}
                        sx={{
                            fontSize: { xs: "2rem", md: "2.25rem" }
                        }}>
                        Gửi
                    </Button>
                </Box>

                <Typography variant="body1" sx={{ fontSize: "1.35rem" }} mt={2}>
                    <Box fontWeight='bold' display='inline'>Lưu ý: </Box>
                    <Box fontStyle={"italic"} display='inline'>ghi chính xác đáp án có khoảng trắng và không viết hoa, không có dấu câu</Box>
                </Typography>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    width: { xs: "80%", md: "40%" },
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        textAlign: "center",
                        fontWeight: "600"
                    }}>
                        Chính xác!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{
                        mt: "7px",
                        fontSize: { xs: "16px", md: "20px" },
                        textAlign: "center"
                    }}>
                        {message}
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        mt: 1
                    }}>
                        <Button variant="contained" sx={{
                            background: "#6c757d",
                            "&:hover": {
                                background: "#6c757d"
                            }
                        }}
                            onClick={() => cancelButton()}
                        >
                            Trở về
                        </Button>
                        <Button sx={{
                            ml: 1,
                        }} variant="contained"
                            onClick={() => nextMatThu(data.STT + 1)}
                        >
                            Câu tiếp theo
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container >

    )
}


export default MatThuUser;