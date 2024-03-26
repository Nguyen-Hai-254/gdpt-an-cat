import { Box, Container, Typography } from "@mui/material";
import SidebarRight from "../../components/sidebarRight";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoryByLink } from "../../api/referenceApi";
import { createMarkup } from "../../utils/convert";


const StoryDetail = () => {
    const param = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async (link) => {
            const res = await getStoryByLink(link);
            setData(res.data);
        }

        fetchData(param.storyId)
    }, [param.storyId])

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
                margin: "0 auto",
                background: "#fff",
                borderRadius: "25px",
                padding: { xs: "16px", sm: "30px" },
                height: "100%"
            }}>
                <Typography variant="h3" sx={{
                    fontWeight: "700",
                    color: "#555", textTransform: 'capitalize',
                    textAlign: 'center',
                    lineHeight: '1.25'
                }}>
                    Câu chuyện: {data && data.name ? data.name : ''}
                </Typography>

                <Box
                    component="img"
                    sx={{
                        margin: "30px auto",
                        display: "block",
                        maxWidth: { xs: "70vw", sm: "50vw" },
                    }}
                    alt={data && data.name ? data.name : ''}
                    src={data && data.image ? data.image : ''}
                />

                <Box sx={{ mt: 3, textAlign: 'justify' }}
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data.content)}>
                </Box>
            </Box >
            <SidebarRight />
        </Container>
    )
}

export default StoryDetail;