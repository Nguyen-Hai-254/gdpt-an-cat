import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import Answers from "./answers";

const TextAreaStyle = styled("textarea")(({ theme }) => ({
    border: `2px solid #555`,
    width: "60%",
    flexGrow: 1,
    boxSizing: "border-box",
    borderRadius: 3,
    backgroundColor: "#fff",
    fontSize: "16px",
    marginLeft: "10px",
    resize: "none",

    "&:hover": {
        border: `2px solid #FF0000`
    },
    "&:focus": {
        border: `2px solid #0FF00F`,
        outline: "none"
    }
}));

const Question = () => {
    const [question, setQuestion] = useState("");

    return (
        <Box mt={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" >
                    Câu :
                </Typography>
                <TextAreaStyle
                    required
                    rowsMin={3}
                    rowMax={6}
                    placeholder="Nhập câu hỏi"
                    multiline
                    variant="outlined"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </Box>
            
            <Answers />
        </Box>
    )
}

export default Question;