import React from "react";
import "./tableOfContent.scss";
import huyhieu from "../../assests/images/huyhieugdpt.jpg";
import { Link } from "react-router-dom";
import { Box, ImageList, ImageListItem, List, ListItem, Typography } from "@mui/material";
import styled from "styled-components";


const LinkHover = styled(Link)`
    img {
        transition: all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;
    }

    &:hover img{
        transform: scale(1.2, 1.2);
    }
`
const TuHoc = () => {

    return (
        <div>
            <Box sx={{
                width: { xs: "90%", md: "60%" },
                margin: "0 auto",
            }}>
                <Typography variant="h3" sx={{ fontWeight: "700" }}>Chương trình tu học các ngành</Typography>
                <Typography variant="h4" mt={3}>Trong GĐPT có hai trường hợp chia ngành: </Typography>
                <List
                    sx={{
                        listStyleType: "disc",
                    }}>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Chia ngành theo giới: GĐPT có hai ngành (giới) là ngành Nam và ngành Nữ.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Chia ngành theo độ tuổi: Có 3 ngành
                        <List sx={{
                            // listStyleType: "disc",
                        }}>
                            <ListItem sx={{ display: 'list-item' }}>+ Ngành Đồng: Đoàn sinh từ 6 – 12 tuổi. Gồm có Đồng Nam và Đồng Nữ.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>+ Ngành Thiếu: Đoàn sinh từ 13 – 18 tuổi. Gồm có Thiếu ­Nam và Thiếu Nữ.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>+ Ngành Thanh: Đoàn sinh từ 19 tuổi trở lên. Gồm có Nam Phật tử và Nữ Phật tử. </ListItem>
                        </List>
                    </ListItem>

                </List>
                <Typography variant="h5">Trên cơ sở phân ngành đó sẽ xây dựng các chương trình tu học, các hình thức sinh hoạt khác nhau cho phù hợp thích ứng với tâm lý, sinh lý của từng ngành.</Typography>

                <Typography variant="h6" sx={{ fontStyle: "italic", mt: 2 }}>(Nhấn vào từng ngành để xem chi tiết bài học)</Typography>
            </Box>

            <ImageList sx={{
                width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
                margin: "30px auto"
            }} cols={2} gap={16}>
                <ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-dong"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            border: "2px solid #000",
                            padding: "15px",
                            borderRadius: "25px",
                            textDecorate: "none",
                            transition: "1.3s",
                            background: "#fff",
                            overflow: "hidden"
                            // width: "45%"
                        }}
                    >
                        <img
                            // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={huyhieu}
                            alt="Ngành Đồng"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Ngành Đồng</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thieu"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            border: "2px solid #000",
                            padding: "15px",
                            borderRadius: "25px",
                            textDecorate: "none",
                            transition: "1.3s",
                            background: "#fff",
                            overflow: "hidden"
                            // width: "45%"
                        }}
                    >
                        <img
                            // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={huyhieu}
                            alt="Ngành Thiếu"
                            loading="lazy"
                            // style={{ maxWidth: "240px" }}
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Ngành Thiếu</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thanh"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            border: "2px solid #000",
                            padding: "15px",
                            borderRadius: "25px",
                            textDecorate: "none",
                            transition: "1.3s",
                            background: "#fff",
                            overflow: "hidden"
                            // width: "45%"
                        }}
                    >
                        <img
                            // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={huyhieu}
                            alt="Ngành Thanh"
                            loading="lazy"
                            // style={{ maxWidth: "240px" }}
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Ngành Thanh</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/huynh-truong"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            border: "2px solid #000",
                            padding: "15px",
                            borderRadius: "25px",
                            textDecorate: "none",
                            transition: "1.3s",
                            background: "#fff",
                            overflow: "hidden"
                            // width: "45%"
                        }}
                    >
                        <img
                            // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={huyhieu}
                            alt="Huynh Trưởng"
                            loading="lazy"
                            // style={{ maxWidth: "240px" }}
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Huynh Trưởng</Typography>
                    </LinkHover>
                </ImageListItem>
            </ImageList >

            {/* <div className="table_of_content_body">
                <div className="content_row_card">
                    <div className="content_card">

                        <Link to="/tu-hoc/nganh-dong">
                            <img className="img" src={huyhieu} alt="Ngành Đồng" />
                            <h4>Ngành Đồng</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu">
                            <img className="img" src={huyhieu} alt="Ngành Thiếu" />
                            <h4>Ngành Thiếu</h4>
                        </Link>
                    </div>
                </div>
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thanh">
                            <img className="img" src={huyhieu} alt="Ngành Thanh" />
                            <h4>Ngành Thanh</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/huynh-truong">
                            <img className="img" src={huyhieu} alt="Huynh Trưởng" />
                            <h4>Huynh Trưởng</h4>
                        </Link>
                    </div>
                </div>
            </div> */}

        </div >
    )
}

export default TuHoc;