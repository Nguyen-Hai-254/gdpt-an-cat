import { Box, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTableOfContentLevel } from "../api/lessonApi";
import Developing from "./Developing";
import { NavLink, useLocation } from "react-router-dom";


const Sidebar = ({ level }) => {
    const location = useLocation()
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async (level) => {
            const res = await getTableOfContentLevel(level);
            setData(res.data)
        }

        fetchData(level);
    }, [])

    return (
        <Box sx={{ maxWidth: "25%" }}>
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
    )
}

export default Sidebar;