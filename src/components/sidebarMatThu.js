import { Box, Button, IconButton, Typography } from "@mui/material";
import {  useState } from "react";
import { GridMenuIcon } from "@mui/x-data-grid";


const SidebarMatThu = ({ currentMatThu, total, getMatThu }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        window.scrollTo(0, 0);
        setShowSidebar(!showSidebar);
    };

    const handleGetMatThu = (index) => {
        setShowSidebar(false);
        getMatThu(index);
    }

    return (
        <Box sx={{ width: { xs: showSidebar ? "75%" : "10%", md: '40%', lg: '30%' } }}>
            <IconButton
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'flex-start',
                    border: '1px solid #ddd',
                    height: '32px',
                    borderRadius: '4px',
                    position: 'sticky',
                    top: '110px'
                }}
                onClick={() => handleShowSidebar()}
            >
                <GridMenuIcon />
            </IconButton>
            <Box></Box>
            <br />
            <Box
                sx={{
                    display: { xs: showSidebar ? 'block' : 'none', md: 'block' },
                    transition: "transition: all 0.3s ease-in",
                    ml: "12px"
                }}
            >
                <Typography variant="h4" sx={{
                    mb: 2,
                    textAlign: "center",
                    fontSize: { xs: "2rem", md: "2.75rem" }
                }}>Danh sách mật thư</Typography>
                {[...Array(total).keys()].map((index) => {
                    if (index > currentMatThu) {
                        return (
                            <Button variant="contained" key={index} value={index + 1} disabled sx={{
                                ml: 1,
                                mb: 1,
                                height: { xs: "50px", md: "50px" },
                                minWidth: { xs: "55px", md: "70px" },
                                fontSize: { xs: "2rem", md: "2.75rem" }
                            }}>
                                {index + 1}
                            </Button>
                        )
                    }
                    else {
                        return (
                            <Button variant="contained" key={index} value={index + 1}
                                onClick={() => handleGetMatThu(index + 1)}
                                sx={{
                                    ml: 1,
                                    mb: 1,
                                    height: { xs: "50px", md: "50px" },
                                    minWidth: { xs: "55px", md: "70px" },
                                    fontSize: { xs: "2rem", md: "2.75rem" }
                                }}>
                                {index + 1}
                            </Button>
                        )
                    }
                })}
            </Box >
        </Box >
    )
}


export default SidebarMatThu;