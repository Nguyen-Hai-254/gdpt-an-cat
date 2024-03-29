import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomeNganhDong = () => {
    return (
        <>
            <Grid container sx={{
                display: "flex",
                flexWrap: "nowrap",
                margin: "50 auto 50",
                pl: 2,
                pr: 2,
                alignItems: "center",
                minHeight: "350px"
            }}>
                <Grid item lg={1} md={1} xs={0}></Grid>
                <Grid item lg={4} md={4} xs={8} sx={{
                    display: "flex",
                    flexDirection: "column"
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
                                // background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                                background: "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)",
                                height: "5px",
                                width: "100%",
                                left: "0",
                                borderRadius: "2px"
                            }
                        }}>
                        Tìm hiểu các bậc học ngành Đồng
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: "1.75rem",
                        mt: 2,
                        textAlign: 'justify'
                    }}>
                        "Theo chương trình tu học được tu chỉnh tại Hội nghị Đại biểu Huynh Trưởng GĐPT Việt Nam từ ngày 11 đến 14/08/2006 tại Văn phòng 2 Trung Ương GHPGVN, Thiền viện Quảng Đức và Tổ đình Vĩnh Nghiêm."
                    </Typography>
                </Grid>
                <Grid container item lg={7} md={7} xs={4}
                    rowGap={1}
                    sx={{
                        ml: 3,
                        justifyContent: "flex-end"
                    }}>
                    <Grid item lg={3} md={6} xs={9} sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <Link to="/tu-hoc/nganh-dong/mo-mat"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <img
                                src={require("../assests/images/nganh-dong/momat.jpg")}
                                alt="Mở Mắt"
                                style={{ maxWidth: "95%" }}>
                            </img>
                            <Typography variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    color: "#888",
                                    mt: 2,
                                    textAlign: "center",
                                    fontWeight: "600"
                                }}>
                                Mở Mắt
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={3} md={6} xs={9} sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <Link to="/tu-hoc/nganh-dong/chan-cung"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <img
                                src={require("../assests/images/nganh-dong/chancung.jpg")}
                                alt="Chân Cứng"
                                style={{  maxWidth: "95%" }}>
                            </img>
                            <Typography variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    color: "#888",
                                    mt: 2,
                                    textAlign: "center",
                                    fontWeight: "600"
                                }}>
                                Chân Cứng
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={3} md={6} xs={9} sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <Link to="/tu-hoc/nganh-dong/canh-mem"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <img
                                src={require("../assests/images/nganh-dong/canhmem.jpg")}
                                alt="Cánh Mềm"
                                style={{  maxWidth: "95%" }}>
                            </img>
                            <Typography variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    color: "#888",
                                    mt: 2,
                                    textAlign: "center",
                                    fontWeight: "600"
                                }}>
                                Cánh Mềm
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={3} md={6} xs={9} sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <Link to="/tu-hoc/nganh-dong/tung-bay"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={require("../assests/images/nganh-dong/tungbay.jpg")}
                                alt="Tung Bay"
                                style={{  maxWidth: "95%" }}>
                            </img>
                            <Typography variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    color: "#888",
                                    mt: 2,
                                    textAlign: "center",
                                    fontWeight: "600"
                                }}>
                                Tung Bay
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid >
        </>

    );
};
