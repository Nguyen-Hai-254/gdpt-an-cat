import { Box, Button, Container, Modal, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../api/userApi";
import { toast } from "react-toastify";
import { object, string } from "yup";


let profileSchema = object({
    name: string().required('Họ và tên không được để trống'),
    email: string().required('Email không được để trống').email('Email không đúng định dạng'),
})

const Profile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProfile();

                setData(res.data);
                setName(data.name);
                setEmail(data.email)
                setAddress(data.address)
                setIsLoading(false);
            } catch (e) {
                if (e.response.status) {
                    toast.error(e.response.data)
                }
            }
        }

        fetchData();
    }, [isLoading])

    const cancelButton = () => {
        setOpen(false);
        setName(data.name);
        setEmail(data.email)
        setAddress(data.address)
    }

    const handleUpdateProfile = async () => {
        try {
            await profileSchema.validate({ name, email });
            const res = await updateProfile(name, email, address);
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
            setError('');
            let newData = data;
            newData.email = email;
            newData.name = name;
            newData.address = address;
            setData(newData);

            setOpen(false);
        } catch (e) {
            if (e.response && e.response.status) {
                setError(e.response.data)
            }
            else {
                setError(e.message)
            }
        }
    }

    return (
        <Container sx={{
            maxWidth: {
                xs: "90%", md: "60% !important", lg: "40% !important"
            },
            margin: "auto",
            pl: 0,
            pr: 1,
            // height: "60vh"
        }
        } >
            <Typography variant="h2" sx={{
                textAlign: "center",
                margin: "auto"
            }}>
                Trang cá nhân
            </Typography>
            <Box sx={{

            }}>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography variant="h4">
                        Họ và tên:
                    </Typography>
                    <Typography variant="h4" ml={1}>
                        {data.name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="h4">
                        Email:
                    </Typography>
                    <Typography variant="h4" ml={1}>
                        {data.email}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="h4">
                        Địa chỉ:
                    </Typography>
                    <Typography variant="h4" ml={1}>
                        {data.address ?? "..."}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="h4">
                        Mật thư đã vượt qua:
                    </Typography>
                    <Typography variant="h4" ml={1}>
                        {data.matThu}
                    </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained"
                        onClick={() => setOpen(true)}
                        sx={{ margin: "auto", mt: 2, lineHeight: "2.75rem", fontSize: "1.5rem" }}
                    >
                        Thay đổi thông tin
                    </Button>
                </Box>

            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    width: { xs: "80%", md: "60%", lg: "40%" },
                    position: 'absolute',
                    top: { xs: '50%', md: '40%', lg: "40%" },
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h3" sx={{ textAlign: "center", margin: "auto" }}>
                        Cập nhật trang cá nhân
                    </Typography>
                    <Box sx={{ display: { sm: "flex" }, alignItems: "center", mt: 1 }}>
                        <Typography variant="h4" sx={{ minWidth: '110px' }}>Họ và tên</Typography>
                        <TextField
                            required
                            sx={{ minWidth: '60%', mt: 1, fontSize: 40, margin: { xs: "12px 0", sm: "12px 10px" } }}
                            placeholder="Nhập họ và tên"
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            inputProps={{ style: { fontSize: 20 } }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ display: { sm: "flex" }, alignItems: "center", mt: 1 }}>
                        <Typography variant="h4" sx={{ minWidth: '110px' }}>Email</Typography>
                        <TextField
                            required
                            sx={{ minWidth: '60%', mt: 1, fontSize: 40, margin: { xs: "12px 0", sm: "12px 10px" } }}
                            placeholder="Nhập email"
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            inputProps={{ style: { fontSize: 20 } }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ display: { sm: "flex" }, alignItems: "center", mt: 1 }}>
                        <Typography variant="h4" sx={{ minWidth: '110px' }}>Địa chỉ</Typography>
                        <TextField
                            required
                            sx={{ minWidth: '60%', mt: 1, fontSize: 40, margin: { xs: "12px 0", sm: "12px 10px" } }}
                            placeholder="Nhập địa chỉ"
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            inputProps={{ style: { fontSize: 20 } }}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Box>
                    <Typography color={"red"} variant="h6">{error}</Typography>

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
                        <Button sx={{ ml: 1 }} variant="contained"
                            onClick={() => handleUpdateProfile()}
                        >
                            Cập nhật
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container >
    )
}

export default Profile;