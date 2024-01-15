import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTableOfContentLevel } from "../api/lessonApi";
import Developing from "./Developing";
import { NavLink, useLocation } from "react-router-dom";
import { GridMenuIcon } from "@mui/x-data-grid";


const Sidebar = ({ level }) => {
    const location = useLocation()
    const [data, setData] = useState([]);

    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        window.scrollTo(0, 0);
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        const fetchData = async (level) => {
            const res = await getTableOfContentLevel(level);
            setData(res.data)
        }

        fetchData(level);
    }, [])

    return (
        <Box sx={{ minWidth: { xs: showSidebar ? "65%" : "10%", md: '20%' }, }}>
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
                    // minWidth: { xs: showSidebar ? "65%" : "10%", md: '20%' },
                    display: { xs: showSidebar ? 'block' : 'none', md: 'block' },
                    transition: "transition: all 0.3s ease-in",
                    ml: "12px"
                }}>
                {data && data.length > 0 ?
                    data.map((chapter, index) => {
                        return (
                            <Box key={index}>
                                <Typography variant="h4">
                                    {chapter.title}
                                </Typography>
                                <List
                                    sx={{
                                        listStyleType: "decimal",
                                        '&& MuiListItem:hover': {
                                            color: "rgba(255, 0, 0, 0.5)"
                                        }
                                    }}
                                >
                                    {chapter.baiHoc.length > 0 && chapter.baiHoc.map((lesson, index2) => {
                                        return (
                                            <ListItem
                                                key={index2}
                                                sx={{ display: 'list-item', fontSize: '14px', lineHeight: '20px' }}>
                                                <NavLink
                                                    style={({ isActive }) => {
                                                        return {
                                                            fontWeight: isActive ? "bold" : "",
                                                            color: '#112A46'
                                                        }
                                                    }}
                                                    to={location.pathname.slice(0, location.pathname.lastIndexOf("/")) + '/' + lesson.url}
                                                >
                                                    {lesson.title}
                                                </NavLink>
                                            </ListItem>
                                        )
                                    })
                                    }
                                </List>
                            </Box>
                        )
                    })

                    :
                    <Developing />
                }
            </Box >
        </Box>
    )
}

export default Sidebar;