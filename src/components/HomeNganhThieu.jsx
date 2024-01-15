import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomeNganhThieu = () => {
    return (
        <Grid container sx={{
            display: "flex",
            flexWrap: "nowrap",
            mt: "130px",
            alignItems: "center"
        }}>
            <Grid container item lg={7} md={7} xs={4}
                rowGap={1}
                sx={{
                    ml: 0,
                    justifyContent: "flex-start"
                }}>
                <Grid item lg={3} md={6} xs={9} sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Link to="/tu-hoc/nganh-thieu/huong-thien"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src={require("../assests/images/nganh-thieu/huongthien.jpg")}
                            style={{ maxWidth: "90%" }}>
                        </img>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "18px",
                                color: "#888",
                                mt: 2,
                                textAlign: "center"
                            }}>
                            Hướng Thiện
                        </Typography>
                    </Link>
                </Grid>
                <Grid item lg={3} md={6} xs={9} sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Link to="/tu-hoc/nganh-thieu/so-thien"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src={require("../assests/images/nganh-thieu/sothien.jpg")}
                            style={{ maxWidth: "90%" }}>
                        </img>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "18px",
                                color: "#888",
                                mt: 2,
                                textAlign: "center"
                            }}>
                            Sơ Thiện
                        </Typography>
                    </Link>
                </Grid>
                <Grid item lg={3} md={6} xs={9} sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Link to="/tu-hoc/nganh-thieu/trung-thien"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src={require("../assests/images/nganh-thieu/trungthien.jpg")}
                            style={{ maxWidth: "90%" }}>
                        </img>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "18px",
                                color: "#888",
                                mt: 2,
                                textAlign: "center"
                            }}>
                            Trung Thiện
                        </Typography>
                    </Link>
                </Grid>
                <Grid item lg={3} md={6} xs={9} sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Link to="/tu-hoc/nganh-thieu/chanh-thien"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={require("../assests/images/nganh-thieu/chanhthien.jpg")}
                            style={{ maxWidth: "90%" }}>
                        </img>
                        <Typography variant="body1"
                            sx={{
                                fontSize: "18px",
                                color: "#888",
                                mt: 2,
                                textAlign: "center"
                            }}>
                            Chánh Thiện
                        </Typography>
                    </Link>
                </Grid>
            </Grid>

            <Grid item lg={4} md={4} xs={8} sx={{
                display: "flex",
                flexDirection: "column",
                ml: 2
            }}>
                <Typography variant="h2"
                    sx={{
                        textTransform: "uppercase",
                        position: "relative",
                        fontSize: "30px",

                        "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "100%",
                            background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                            background: "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)",
                            height: "5px",
                            width: "100%",
                            left: "0",
                            borderRadius: "2px"
                        }
                    }}>
                    Tìm hiểu các bậc học ngành Thiếu
                </Typography>
                <Typography variant="body1" sx={{
                    fontSize: "1.75rem",
                    mt: 2
                }}>
                    "Theo chương trình tu học được tu chỉnh tại Hội nghị Đại biểu Huynh Trưởng GĐPT Việt Nam từ ngày 11 đến 14/08/2006 tại Văn phòng 2 Trung Ương GHPGVN, Thiền viện Quảng Đức và Tổ đình Vĩnh Nghiêm."
                </Typography>
            </Grid>
            <Grid item lg={1} md={1} xs={0}></Grid>
        </Grid >
    );
};
