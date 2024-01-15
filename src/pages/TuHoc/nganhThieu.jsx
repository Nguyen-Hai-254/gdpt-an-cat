import React from "react";
import "./tableOfContent.scss";
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

const TableOfContent = () => {

    return (
        // <div>
            <Box>
                <Box sx={{
                    width: { xs: "90%", md: "60%" },
                    margin: "0 auto",
                }}>
                    <Typography variant="h3" sx={{ fontWeight: "700" }}>Chương trình tu học Ngành Thiếu</Typography>
                    <Typography variant="h6" mt={3} sx={{
                        fontStyle: "italic",
                        fontWeight: "600"
                    }}>"Theo chương trình tu học được tu chỉnh tại Hội nghị Đại biểu Huynh Trưởng GĐPT Việt Nam từ ngày 11 đến 14/08/2006 tại Văn phòng 2 Trung Ương GHPGVN, Thiền viện Quảng Đức và Tổ đình Vĩnh Nghiêm."</Typography>

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
                    width: { xs: "100%", md: "40%" },
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
                                overflow: "hidden"
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
                                overflow: "hidden"
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
                                overflow: "hidden"
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
                                overflow: "hidden"
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
            </Box>


        //     {/* <div className="table_of_content_body">
        //         <div className="content_row_card">
        //             <div className="content_card">
        //                 <Link to="/tu-hoc/nganh-thieu/huong-thien">
        //                     <img className="img"
        //                         src={require("../../assests/images/nganh-thieu/huongthien.jpg")}
        //                         alt="Hướng Thiện" />
        //                     <h4>Hướng Thiện</h4>
        //                 </Link>
        //             </div>
        //             <div className="content_card">
        //                 <Link to="/tu-hoc/nganh-thieu/so-thien">
        //                     <img className="img"
        //                         src={require("../../assests/images/nganh-thieu/sothien.jpg")}
        //                         alt="Sơ Thiện" />
        //                     <h4>Sơ Thiện</h4>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="content_row_card">
        //             <div className="content_card">
        //                 <Link to="/tu-hoc/nganh-thieu/trung-thien">
        //                     <img className="img"
        //                         src={require("../../assests/images/nganh-thieu/trungthien.jpg")}
        //                         alt="Trung Thiện" />
        //                     <h4>Trung Thiện</h4>
        //                 </Link>
        //             </div>
        //             <div className="content_card">
        //                 <Link to="/tu-hoc/nganh-thieu/chanh-thien">
        //                     <img className="img"
        //                         src={require("../../assests/images/nganh-thieu/chanhthien.jpg")}
        //                         alt="Chánh Thiện" />
        //                     <h4>Chánh Thiện</h4>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div> */}

        // {/* </div > */}
    )
}

export default TableOfContent;