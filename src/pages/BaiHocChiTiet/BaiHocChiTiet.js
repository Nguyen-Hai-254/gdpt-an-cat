import { useEffect, useState } from "react"
import { getLessonById } from "../../api/lessonApi";
import DOMPurify from "dompurify";
import { Box, Container, Typography } from "@mui/material";
import SidebarRight from "../../components/sidebarRight";
import Sidebar from "../../components/sidebar";
import Loader from "../../components/Loading/Loader";


function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html)
    }
}

const bodyWidth = {
    width: '60%',
    '@media (max-width: 480px)': {
        width: '85%'
    }
}

const BaiHocChiTiet = ({ lessonId, level }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async (lessonId) => {
            try {
                setIsLoading(true)
                const res = await getLessonById(lessonId);
                setData(res.data)
                setIsLoading(false)
            } catch (e) {
                console.error(e.message);
            }
        }

        fetchData(lessonId)
    }, [lessonId, level])

    return (
        <Container sx={{
            maxWidth: '100% !important',
            display: 'flex',
            mt: 5,
            ml: 0,
            pl: 0,
            pr: 1,
        }}>
            <Sidebar level={level} />
            <Box sx={{
                ml: { xs: 0, sm: 2 },
                mr: { xs: "5px", sm: 2 },
                background: "#fff",
                borderRadius: "25px",
                padding: { xs: "16px", sm: "30px" },
                height: "100%"
            }}
                containerstyle={bodyWidth}>
                <Typography
                    sx={{
                        fontSize: { xs: "3rem", md: "3.75rem" }
                    }} variant="h2"> {data && data.title ? data.title : ''} (Bậc {level})</Typography>

                {isLoading ?
                    <Loader />
                    :
                    data && data.lesson && data.lesson.map((item, index) => {
                        return (
                            <Box key={index}>
                                <Box mt={3}
                                    className="preview"
                                    dangerouslySetInnerHTML={createMarkup(item.content)}>
                                </Box>
                                <Box
                                    component="img"
                                    sx={{
                                        margin: "30px auto",
                                        display: "block",
                                        maxWidth: { xs: "70vw", sm: "50vw" },
                                    }}
                                    alt={data && data.name ? data.name : ''}
                                    src={item && item.image ? item.image : ''}
                                />
                            </Box>
                        )
                    })}
            </Box>

            <SidebarRight />
        </Container>

    )
}


export default BaiHocChiTiet;