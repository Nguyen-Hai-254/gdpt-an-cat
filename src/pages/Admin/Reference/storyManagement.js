import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteStory } from "../../../api/adminApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllStory } from "../../../api/referenceApi";

export default function StoryManagement() {
    const token = useSelector((state) => state.auth.access_token);
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllStory();
                setData(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        if (!token) {
            navigate('/login');
        }
        else {
            fetchData()
        }

    }, [])

    const handleDeleteStory = async (storyId) => {
        try {
            const res = await deleteStory(storyId);
            if (res.statusCode === 200) {
                toast.success(res.message);

                const newRows = data.filter((row) => row._id !== storyId);
                setData(newRows);
            }
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    const handleUpdateStory = (storyId) => {
        navigate(`chinh-sua-cau-chuyen-tien-than/${storyId}`);
    }

    return (
        <Container sx={{ minWidth: "100%", pl: "10px", pr: "10px" }}>
            <Typography variant="h2">Quản lý câu chuyện tiền thân</Typography>

            <Box display={"flex"}>
                <Button size="large" variant="contained" sx={{
                    margin: "auto 0 auto auto"
                }}
                >
                    <Link to="tao-cau-chuyen-tien-than">
                        <Typography variant="h6" color="#fff">
                            Thêm câu chuyện
                        </Typography>
                    </Link>
                </Button>
            </Box>

            <Paper sx={{ mt: 3 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontSize: 24 }}>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">STT</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }}>Tiêu đề</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }}>Link</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        fontSize: 20,
                                        minHeight: 90
                                    }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }} align="center"> {index + 1}</TableCell>
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}> {row.name}</TableCell>
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}> {row.link}</TableCell>
                                    <TableCell TableCell
                                        sx={{
                                            fontSize: "inherit",
                                            display: "flex",
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            minHeight: "inherit"
                                        }} align="right">
                                        <Button variant="contained" sx={{ color: "yellow" }}
                                            onClick={() => handleUpdateStory(row._id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button sx={{ ml: 1 }} variant="contained" color="error"
                                            onClick={() => handleDeleteStory(row._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </Paper>
        </Container>
    );
}