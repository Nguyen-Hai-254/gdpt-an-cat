import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { typeLevel } from "../../../utils/tuHoc";
import Question from "../../../components/exam/question";


const CreateExam = () => {
    const [type, setType] = useState("");

    return (
        <Container sx={{ maxWidth: '60%' }} margin="0 auto">
            <Box mt={3}>
                <Typography variant="h4" >
                    Chọn bậc học
                </Typography>
                <Select
                    sx={{ minWidth: 240, fontSize: 18, mt: 1 }}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    {typeLevel.map((levelLesson, index) => {
                        return (
                            <MenuItem key={index} sx={{ fontSize: 14 }} value={levelLesson.value}>{levelLesson.value}</MenuItem>
                        )
                    })
                    }
                </Select>

                <Question />
            </Box>
        </Container>
    )
}

export default CreateExam;