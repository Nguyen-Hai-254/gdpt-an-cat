import { Box, Container, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkHover = styled(Link)`
    & {
        /* border: 2px solid #555; */
        /* border-radius: 12px; */
        overflow: hidden;
        position: absolute;
        top: -1px;
        left: -2px;
        right: -2px;
        bottom: -1px;
        transition: all .5s;
        /* background-image: url("../assests/images/trochoi/trochoi.jpg");
        background-size: cover !important; */

    }    

    &:after {
        background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%);
        top: auto;
        height: 75%;

        transition: all .35s;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';        
        position: absolute;
    }

    &:hover img{
        transform: scale(1.2);
        transition: all .5s;
    }
`

export const Reference = () => {
    const matchDownMd = useMediaQuery('(max-width:480px)');

    return (
        <Container sx={{
            // minWidth: "100vw !important",
            minWidth: "100%",
            background: "#cee2d6",
            m: 0,
            p: "0 !important",
            display: "flex",
            mt: -5
        }}>
            <Container
                sx={{
                    margin: "50 auto 50",
                }}
            >

                <Typography variant="h2"
                    sx={{
                        color: "#6328DE",
                        textAlign: "center",
                        fontSize: "30px",
                        textTransform: "uppercase",
                        mb: 3
                    }}
                >Tư liệu tham khảo</Typography>

                <ImageList sx={{ overflow: "hidden" }} cols={matchDownMd ? 1 : 3} gap={25}>
                    <ImageListItem >
                        <LinkHover to="/tu-lieu-tham-khao/mot-so-de-thi">
                        </LinkHover>
                        <Box sx={{
                            fontFamily: 'Roboto',
                            fontWeight: "500",
                            fontSize: "18px",
                            textAlign: "inherit",
                            position: "absolute!important",
                            bottom: "20px",
                            left: "20px",
                            right: "20px",
                            padding: "0",
                            overflow: 'hidden',
                            pointerEvents: "none",
                        }}
                        >
                            <Typography variant="h4"
                                sx={{
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    transform: "translateY(100 %)",
                                    transition: "all 0.3s",
                                    textShadow: "1px 1px 3px rgba(0,0,0,.2)",
                                    margin: "0",
                                    lineHeight: "1.4",
                                    textAlign: "center!important"
                                }}
                            >
                                Một số đề thi vượt bậc
                            </Typography>
                        </Box>
                        <img
                            src={require("../assests/images/mot-so-de-thi/mot-so-de-thi.jpg")}
                            alt="một số đề thi vượt bậc"
                            style={{ maxWidth: "100%", boxShadow: '2px 2px 9px 5px #888888' }}
                        />
                    </ImageListItem>

                    <ImageListItem >
                        <LinkHover to="/hoat-dong-thanh-nien">
                        </LinkHover>
                        <Box sx={{
                            fontFamily: 'Roboto',
                            fontWeight: "500",
                            fontSize: "18px",
                            textAlign: "inherit",
                            position: "absolute!important",
                            bottom: "20px",
                            left: "20px",
                            right: "20px",
                            padding: "0",
                            overflow: 'hidden',
                            pointerEvents: "none",
                        }}
                        >
                            <Typography variant="h4"
                                sx={{
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    transform: "translateY(100 %)",
                                    transition: "all 0.3s",
                                    textShadow: "1px 1px 3px rgba(0,0,0,.2)",
                                    margin: "0",
                                    lineHeight: "1.4",
                                    textAlign: "center!important"
                                }}
                            >
                                Hoạt động thanh niên
                            </Typography>
                        </Box>
                        <img
                            src={require("../assests/images/hoat-dong-thanh-nien/hoat-dong-thanh-nien.jpg")}
                            alt="hoạt động thanh niên"
                            style={{ maxWidth: "100%", maxHeight: "240px", boxShadow: '2px 2px 9px 5px #888888' }}
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <LinkHover to="/tu-lieu-tham-khao/tro-choi">
                        </LinkHover>
                        <Box sx={{
                            fontFamily: 'Roboto',
                            fontWeight: "500",
                            fontSize: "18px",
                            textAlign: "inherit",
                            position: "absolute!important",
                            bottom: "20px",
                            left: "20px",
                            right: "20px",
                            padding: "0",
                            overflow: 'hidden',
                            pointerEvents: "none",
                        }}
                        >
                            <Typography variant="h4"
                                sx={{
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    transform: "translateY(100 %)",
                                    transition: "all 0.3s",
                                    textShadow: "1px 1px 3px rgba(0,0,0,.2)",
                                    margin: "0",
                                    lineHeight: "1.4",
                                    textAlign: "center!important"
                                }}
                            >
                                Một số trò chơi sinh hoạt
                            </Typography>
                        </Box>
                        <img
                            src={require("../assests/images/trochoi/trochoi.jpg")}
                            alt="Một số trò chơi sinh hoạt"
                            style={{ maxWidth: "100%", overflow: "hidden", boxShadow: '2px 2px 9px 5px #888888' }}
                        />
                    </ImageListItem>
                </ImageList>
            </Container >
        </Container >
    );
};
