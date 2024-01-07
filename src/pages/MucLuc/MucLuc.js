import "./content.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTableOfContentLevel } from "../../api/lessonApi";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Developing from "../../components/Developing";


const MucLuc = ({ level }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async (level) => {
            try {
                const res = await getTableOfContentLevel(level);
                setData(res.data)
            } catch (e) {
                console.error(e.message)
            }
        }

        fetchData(level);
        
    }, [level])
    
    return (
        <Container sx={{ width: "60%", margin: "30 auto", padding: 0 }}>
            {data && data.length !== 0 ?
                data?.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Typography variant="h2" color={"#112A46"} fontSize={"3.25rem"}>{item.title} </Typography>
                            <List sx={{
                                listStyleType: "decimal",
                                '&& MuiListItem:hover': {
                                    color: "rgba(255, 0, 0, 0.5)"
                                }
                            }}>
                                {item.baiHoc.map((baiHoc, index2) => {
                                    return (
                                        <ListItem
                                            key={index2}
                                            sx={{
                                                lineHeight: "32px",
                                                fontSize: "20px",
                                                display: 'list-item',
                                                padding: 0
                                            }}
                                            className="lesson_item"

                                        >
                                            <Link
                                                to={baiHoc.url}
                                                className="lesson_text"
                                            >
                                                {baiHoc.title}
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    )
                })
                : <Developing />

            }
        </Container>
    )
}

export default MucLuc;