import { Box, Container, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStoryLimited } from "../api/referenceApi";

const LinkHover = styled(Link)`
    border: 2px solid #555;
    border-radius: 12px;

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
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStoryLimited();
                setData(res.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    return (
        <Container sx={{
            minWidth: "100%",
            background: "#cee2d6",
            m: 0,
            p: "0 !important",
            display: "flex",
            mt: 3
        }}>
            <Container
                sx={{
                    margin: "50 auto 50",
                }}>

                <Typography variant="h2"
                    sx={{
                        color: "#6328DE",
                        textAlign: "center",
                        fontSize: "30px",
                        textTransform: "uppercase",
                        mb: 3
                    }}
                >Các câu chuyện tiền thân</Typography>
                <ImageList cols={matchDownMd ? 2 : 4} gap={5}>

                    {data && data.length > 0 && data.map((story, index) => {
                        return (
                            <ImageListItem >
                                <LinkHover key={index} to={`/tu-lieu-tham-khao/cau-chuyen-tien-than/${story.link}`}
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        border: "2px solid #555",
                                        borderRadius: "12px",
                                        // maxHeight: { xs: "130px", sm: "", md: "", lg: "150px" }
                                        // maxHeight: "160px",
                                        // minHeight: "90px",
                                        // height: "auto",
                                        // width: "100%"

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
                                            {story.name}
                                        </Typography>
                                    </Box>
                                    {/* <img
                                        src={story.image}
                                        alt={story.name}
                                        style={{ maxWidth: "100%" }}
                                    /> */}
                                    <Box
                                        component={"img"}
                                        src={story.image}
                                        alt={story.name}
                                        sx={{ width: "100%", height: "160px" }}>

                                    </Box>
                                </LinkHover>
                            </ImageListItem>
                        )
                    })}
                    {/* <LinkHover to="/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu"
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                border: "2px solid #555",
                                borderRadius: "12px"
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
                        </LinkHover> */}


                    {/* <ImageListItem >
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
                    </ImageListItem> */}
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
