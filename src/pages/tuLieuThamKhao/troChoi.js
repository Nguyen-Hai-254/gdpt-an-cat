import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTroChoi } from "../../api/adminApi";
import DOMPurify from "dompurify";
import SidebarRight from "../../components/sidebarRight";

function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html)
    }
}

const TroChoi = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTroChoi();
                setData(res.data.content)
            } catch (e) {
                console.error(e.message);
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
                margin: "0 auto",
            }}>
                <Typography variant="h2">
                    Một số trò chơi sinh hoạt
                </Typography>
                <Box mt={3}
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(data)}>
                </Box>
            </Box>
            <SidebarRight />
        </Container>
    )
}

export default TroChoi;