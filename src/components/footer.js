import { Phone, Mail, FacebookOutlined } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <Container
            sx={{
                maxWidth: "100% !important",
                background: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                borderColor: "rgba(231, 231, 231, 0)",
                display: "flex",
                paddingTop: 3,
                marginTop: 3,
                minHeight: 250,
                paddingBottom: 5
            }}
        >
            <Grid container columnSpacing={3}>
                <Grid item md={3} xs={6}>
                    <Typography variant="h3">GĐPT An Cát</Typography>
                    <Typography variant="subtitle1">Địa chỉ: Thượng An, Phong An, Phong Điền, Thừa Thiên Huế</Typography>
                    <Typography variant="h6">Mọi thắc mắc xin liên hệ:</Typography>
                    <Box
                        sx={{ display: "flex" }}>
                        <Phone />
                        <Typography variant="subtitle1" sx={{ ml: 1 }}>0962351757</Typography>
                    </Box>
                    <Box
                        sx={{ display: "flex" }}>
                        <Mail />
                        <Typography variant="subtitle1" sx={{ ml: 1 }}>phamnguyenhai0123@gmail.com</Typography>
                    </Box>
                    <Box
                        sx={{ display: "flex" }}>
                        <FacebookOutlined />
                        <Typography variant="subtitle1" sx={{ ml: 1 }}>Trang facebook của gia đình:
                            <a href="https://www.facebook.com/gdptancat.com.vn" target="_blank">https://www.facebook.com/gdptancat.com.vn</a>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item md={3} xs={6}>
                    <Typography variant="h4">TU HỌC NGÀNH ĐỒNG</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 1 }}
                        textTransform={"none"}
                    >Mở mắt</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Chân cứng</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Cánh mềm</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Tung bay</Typography>
                </Grid>

                <Grid item md={3} xs={6}>
                    <Typography variant="h4">TU HỌC NGÀNH THIẾU</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 1 }}
                        textTransform={"none"}
                    >Hướng Thiện</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Sơ Thiện</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Trung Thiện</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Chánh Thiện</Typography>
                </Grid>

                <Grid item md={3} xs={6}>
                    <Typography variant="h4">TRẠI HUẤN LUYỆN</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 1 }}
                        textTransform={"none"}
                    >Tuyết Sơn</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Anoma - Ni Liên</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Sơ Cấp Lộc Uyển</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >A Dục</Typography>
                </Grid>

                <Grid item md={3} xs={6}>
                    <Typography variant="h4"></Typography>

                </Grid>

                <Grid item md={3} xs={6} mt={3}>
                    <Typography variant="h4">HOẠT ĐỘNG THANH NIÊN</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 1 }}
                        textTransform={"none"}
                    >Tổng hợp gút dây</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Cách giải mật thư cơ bản</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Dấu đi đường</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Truyền tin</Typography>
                </Grid>

                <Grid item md={3} xs={6} mt={3}>
                    <Typography variant="h4">TƯ LIỆU THAM KHẢO</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 1 }}
                        textTransform={"none"}
                    >Một số đề thi</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Câu chuyện tiền thân</Typography>
                    <Typography variant="h5"
                        sx={{ mt: 0.5 }}
                        textTransform={"none"}
                    >Một số trò chơi</Typography>
                </Grid>

                <Grid item md={3} xs={6} mt={3}>
                    <Typography variant="h4">THAM GIA GIẢI MẬT THƯ</Typography>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Footer;