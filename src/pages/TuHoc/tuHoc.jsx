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

                {/* <Typography variant="h6" sx={{ fontStyle: "italic", mt: 2 }}>(Nhấn vào từng ngành để xem chi tiết bài học)</Typography> */}

                <Typography variant="h6" mt={3} sx={{
                    fontStyle: "italic",
                    fontWeight: "600"
                }}>"Theo chương trình tu học được tu chỉnh tại Hội nghị Đại biểu Huynh Trưởng GĐPT Việt Nam từ ngày 11 đến 14/08/2006 tại Văn phòng 2 Trung Ương GHPGVN, Thiền viện Quảng Đức và Tổ đình Vĩnh Nghiêm."</Typography>

                <Typography variant="body1" sx={{
                    fontSize: "1.75rem",
                    mt: 2
                }}>Chương trình tu học Ngành Đồng được chia thành bốn bậc học, bao gồm: </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                    }}>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Mở Mắt.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>Bậc Chân Cứng.</ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Cánh Mềm.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Tung Bay.
                    </ListItem>
                </List>

                <Typography variant="h6" sx={{ fontStyle: "italic", mt: 2 }}>(Nhấn vào từng bậc để xem chi tiết bài học)</Typography>
            </Box>

            {/* <ImageList sx={{
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
            </ImageList > */}

            <ImageList sx={{
                width: { xs: "90%", sm: "60%", md: "40%" },
                margin: "30px auto"
            }} cols={2} gap={16} >
                <ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-dong/mo-mat"
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
                            src={require("../../assests/images/nganh-dong/momat.jpg")}
                            alt="Mở Mắt"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Mở Mắt</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-dong/chan-cung"
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
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-dong/chancung.jpg")}
                            alt="Chân Cứng"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Chân Cứng</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-dong/canh-mem"
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
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-dong/canhmem.jpg")}
                            alt="Cánh Mềm"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Cánh Mềm</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-dong/tung-bay"
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
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-dong/tungbay.jpg")}
                            alt="Tung Bay"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Tung Bay</Typography>
                    </LinkHover>
                </ImageListItem>
            </ImageList >

            <Box sx={{
                width: { xs: "90%", md: "60%" },
                margin: "0 auto",
            }}>
                <Typography variant="body1" sx={{
                    fontSize: "1.75rem",
                    mt: 2
                }}>Chương trình tu học Ngành Thiếu được chia thành bốn bậc học, bao gồm: </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                    }}>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Hướng Thiện.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Sơ Thiện.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Trung Thiện.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        Bậc Chánh Thiện.
                    </ListItem>
                </List>

                <Typography variant="h6" sx={{ fontStyle: "italic", mt: 2 }}>(Nhấn vào từng bậc để xem chi tiết bài học)</Typography>
            </Box>

            <ImageList sx={{
                width: { xs: "90%", sm: "60%", md: "40%" },
                margin: "30px auto"
            }} cols={2} gap={16} >
                <ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thieu/huong-thien"
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
                            overflow: "hidden",
                            height: "100%"
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-thieu/huongthien.jpg")}
                            alt="Hướng Thiện"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Hướng Thiện</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thieu/so-thien"
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
                            overflow: "hidden",
                            height: "100%"
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-thieu/sothien.jpg")}
                            alt="Sơ Thiện"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Sơ Thiện</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thieu/trung-thien"
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
                            overflow: "hidden",
                            height: "100%"
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-thieu/trungthien.jpg")}
                            alt="Trung Thiện"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            // fontSize: "2.25rem",
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Trung Thiện</Typography>
                    </LinkHover>
                </ImageListItem>
                < ImageListItem >
                    <LinkHover to="/tu-hoc/nganh-thieu/chanh-thien"
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
                            overflow: "hidden",
                            height: "100%"
                        }}
                    >
                        <img
                            src={require("../../assests/images/nganh-thieu/chanhthien.jpg")}
                            alt="Chánh Thiện"
                            loading="lazy"
                            style={{ maxWidth: "90%" }}
                        />
                        <Typography variant="h4" sx={{
                            fontSize: { xs: "18px", md: "20px", lg: "24px" },
                            fontWeight: "600", mt: 2,
                            zIndex: 30
                        }}>Chánh Thiện</Typography>
                    </LinkHover>
                </ImageListItem>
            </ImageList >
        </div >
    )
}

export default TuHoc;