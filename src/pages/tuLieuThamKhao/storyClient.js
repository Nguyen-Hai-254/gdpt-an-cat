import { Box, Container, Grid, Typography } from "@mui/material";
import SidebarRight from "../../components/sidebarRight";
import { useEffect, useState } from "react";
import { getAllStory } from "../../api/referenceApi";
import { Link } from "react-router-dom";
import Loader from "../../components/Loading/Loader";


const StoryClient = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getAllStory();
                setData(res.data);
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    return (
        <Container sx={{
            maxWidth: '100% !important',
            display: 'flex',
            mt: 5,
            ml: 0,
            pl: 0,
            pr: 1,
        }}>
            <Box sx={{
                width: { xs: "90%", md: "60%" },
                margin: "0 auto"
            }}>
                <Typography variant="h3" sx={{ fontWeight: "700", color: "#555", textAlign: 'center' }}>
                    Các câu chuyện tiền thân
                </Typography>

                <Box sx={{ width: "100%", mt: 3 }}>
                    <Grid container columnSpacing={3}>
                        {isLoading ? <Loader />
                            :
                            data.length > 0 && data.map((story, index) => {
                                return (
                                    <Grid item lg={4} xs={12} sm={6} key={index}>
                                        <Box sx={{
                                            border: "2px solid #888",
                                            padding: "15px",
                                            borderRadius: "25px",
                                            background: "#fff",
                                            maxWidth: "85vw",
                                            overflow: "hidden",
                                            cursor: "pointer",
                                            position: "relative",
                                            margin: "auto",
                                            marginBottom: "20px",
                                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                                            height: "95%",

                                            '&:hover .img': {
                                                transform: "scale(1.2)",
                                            },

                                            '&:hover .title': {
                                                color: '#00a856'
                                            }
                                        }}>
                                            <Link to={story.link}>
                                                <Box sx={{
                                                    backgroundImage: `url(${story.image})`,
                                                    height: "200px",
                                                    maxWidth: "85vw",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    transition: "all .7s ease",
                                                    borderRadius: "25px",
                                                    border: "2px solid #fff",
                                                }} className='img'>
                                                </Box>
                                            </Link>
                                            <Typography variant="h4" sx={{
                                                textAlign: "center",
                                                mt: 3,
                                                fontWeight: "600",
                                                textTransform: "capitalize"
                                            }}>
                                                {story.name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                )
                            })}
                    </Grid>
                </Box>

            </Box >
            <SidebarRight />
        </Container>
    )
}

export default StoryClient;