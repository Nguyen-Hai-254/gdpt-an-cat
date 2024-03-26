import { useEffect, useState } from "react"
import { getLessonById } from "../../api/lessonApi";
import DOMPurify from "dompurify";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/sidebar";
import SidebarRight from "../../components/sidebarRight";


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

    useEffect(() => {
        const fetchData = async (lessonId) => {
            try {
                const res = await getLessonById(lessonId);
                setData(res.data)
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
                <Box mt={3}
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data.content)}>
                </Box>
            </Box>
            <SidebarRight />
        </Container>

    )
}


export default BaiHocChiTiet;