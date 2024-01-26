import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthWrapper = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.access_token);

    const { pathname } = useLocation()

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return token
        ? <Outlet />
        : (
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
                        Để sử dụng tính năng này bạn cần đăng nhập!
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
                            onClick={() => setOpen(false)}
                        >
                            Trở về
                        </Button>
                        <Button sx={{ ml: 1 }} variant="contained"
                            onClick={() => navigate(`/login?redirectTo=${pathname}`)}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Box>
            </Modal>
        );
};

export default AuthWrapper;