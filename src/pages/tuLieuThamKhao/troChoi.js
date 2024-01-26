import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTroChoi } from "../../api/adminApi";
import DOMPurify from "dompurify";

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
    )
}

export default TroChoi;