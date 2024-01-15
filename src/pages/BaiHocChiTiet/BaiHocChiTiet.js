import { useEffect, useState } from "react"
import { getLessonById } from "../../api/lessonApi";
import DOMPurify from "dompurify";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/sidebar";


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
    }, [lessonId])

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
                // width: '60%',
                // '@media (max-width: 480px)': {
                //     width: '80%'
                // },
                ml: 2,

            }}
                containerStyle={bodyWidth}>
                <Typography
                    sx={{}} variant="h2"> {data && data.title ? data.title : ''}</Typography>
                <Box mt={3}
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data.content)}>
                </Box>
            </Box>
        </Container>

    )
}


export default BaiHocChiTiet;