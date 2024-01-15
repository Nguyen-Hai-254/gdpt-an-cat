import { Box, Container, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { Image } from "./image";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkHover = styled(Link)`
    &:hover h4 {
        opacity: 1;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    
    &:hover div {
        opacity: 1;
    }
`

export const Gallery = () => {
    const matchDownMd = useMediaQuery('(max-width:480px)');

    return (
        <Container sx={{
            minWidth: "100vw !important",
            background: "#fff",
            m: 0,
            p: 0,
            display: "flex",
            mt: 3
        }}>
            <Container
                sx={{
                    margin: "50 auto 50",
                    // minHeight: "350px",
                    // background: "#fff",
                    // padding: "0",
                    // width: "100vw"
                }}>
                <ImageList cols={matchDownMd ? 2 : 3} gap={5}>
                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                textAlign: "center",
                                margin: "0 auto",
                                color: " #fff",
                                background: "linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)",
                                padding: "30% 0 0",
                                height: "100%",
                                width: "100%",
                                opacity: "0",
                                transition: "all 0.5s",
                            }}
                            >
                                <Typography variant="h4"
                                    sx={{
                                        opacity: "0",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        transform: "translateY(100 %)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    Lòng hiếu chim Oanh Vũ
                                </Typography>
                            </Box>
                            <img
                                src={require("../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg")}
                                alt="lòng hiếu chim oanh vũ"
                                style={{ maxWidth: "100%" }}
                            />
                        </LinkHover>
                    </ImageListItem>
                </ImageList>
            </Container >


            {/* <div id="portfolio" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Gallery</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                            dapibus leonec.
                        </p>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {props.data
                                ? props.data.map((d, i) => (
                                    <div
                                        key={`${d.title}-${i}`}
                                        className="col-sm-6 col-md-4 col-lg-4"
                                    >
                                        <Image
                                            title={d.title}
                                            largeImage={d.largeImage}
                                            smallImage={d.smallImage}
                                        />
                                    </div>
                                ))
                                : "Loading..."}
                        </div>
                    </div>
                </div>
            </div> */}
        </Container>

    );
};
