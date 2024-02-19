import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

const ReferencePage = () => {

    return (
        <div>
            <Box sx={{
                width: { xs: "90%", md: "60%" },
                margin: "0 auto",
            }}>
                <Typography variant="h3" sx={{ fontWeight: "700" }}>Tư liệu tham khảo</Typography>
                <List
                    sx={{
                        listStyleType: "disc",
                    }}>
                    <ListItemButton sx={{ fontSize: "32px" }}>
                        <ListItemIcon>
                            <Send sx={{ fontSize: "2rem" }} />
                        </ListItemIcon>
                        <Link to="mot-so-de-thi">
                            <ListItemText primary="Một số đề thi vượt bậc"
                                primaryTypographyProps={{
                                    fontSize: "2rem",
                                }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton sx={{ fontSize: "32px" }}>
                        <ListItemIcon>
                            <Send sx={{ fontSize: "2rem" }} />
                        </ListItemIcon>
                        <Link to="cau-chuyen-tien-than">
                            <ListItemText primary="Các câu chuyện tiền thân"
                                primaryTypographyProps={{
                                    fontSize: "2rem",
                                }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton sx={{ fontSize: "32px" }}>
                        <ListItemIcon>
                            <Send sx={{ fontSize: "2rem" }} />
                        </ListItemIcon>
                        <Link to="file">
                            <ListItemText primary="Các file tham khảo"
                                primaryTypographyProps={{
                                    fontSize: "2rem",
                                }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton sx={{ fontSize: "32px" }}>
                        <ListItemIcon>
                            <Send sx={{ fontSize: "2rem" }} />
                        </ListItemIcon>
                        <Link to="tro-choi">
                            <ListItemText primary="Một số trò chơi sinh hoạt vòng tròn"
                                primaryTypographyProps={{
                                    fontSize: "2rem",
                                }}
                            />
                        </Link>
                    </ListItemButton>
                </List>
            </Box>
        </div >
    )
}

export default ReferencePage;