import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteLessonById, getAllLesson, setOrderLesson } from "../../api/adminApi";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify/toastify";
import 'react-toastify/dist/ReactToastify.css';
import { typeChapter, typeLevel } from "../../utils/tuHoc";
import Selection from "../../components/selectionAdmin/selectionAdmin";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function LessonManagement() {
    const token = useSelector((state) => state.auth.access_token);
    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rows, setRows] = useState([]);

    const [level, setLevel] = useState('');
    const [chapter, setChapter] = useState('');

    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
        setPage(0);
        setSkip(0);
    };

    const handleChangeChapter = (event) => {
        setChapter(event.target.value);
        setPage(0);
        setSkip(0);
    };

    const [numberRow, setNumberRow] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setSkip(rowsPerPage * newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setLimit(parseInt(event.target.value, 10));
        setPage(0);
        setSkip(0);
    };

    const fetchData = async (skip, limit, level, chapter) => {
        try {
            const res = await getAllLesson(skip, limit, level, chapter);
            setRows(res.data.data);
            setNumberRow(res.data.count);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        else
            fetchData(skip, limit, level, chapter)
    }, [skip, limit, level, chapter])

    const handleDeleteLesson = async (lessonId) => {
        try {
            const res = await deleteLessonById(lessonId);
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    const handleSetOrderLesson = async (lessonId, order) => {
        try {
            const res = await setOrderLesson(lessonId, order);
            if (res.statusCode === 200) {
                toast.success(res.message)
            }
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    const handleUpdateLesson = (lessonId) => {
        navigate(`/admin/chinh-sua-bai-hoc/${lessonId}`);
    }

    return (
        <>
            <Typography variant="h2">Quản lý chương trình tu học</Typography>

            <Box sx={{ display: "flex" }}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel sx={{ fontSize: 14 }}>Bậc học</InputLabel>
                    <Select
                        value={level}
                        onChange={handleChangeLevel}
                        autoWidth
                        sx={{ fontSize: 16 }}
                    >
                        {typeLevel.map((level, index) => {
                            return (
                                <MenuItem key={index} value={level.value}>
                                    <em>{level.value}</em>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel sx={{ fontSize: 14 }}>Học phần</InputLabel>
                    <Select
                        value={chapter}
                        onChange={handleChangeChapter}
                        autoWidth
                        sx={{ fontSize: 16 }}
                    >
                        {typeChapter.map((chapter, index) => {
                            return (
                                <MenuItem key={index} value={chapter.value}>
                                    <em>{chapter.value}</em>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button size="large" variant="contained" sx={{
                    margin: "auto 0 auto auto"
                }}
                >
                    <Link to="/admin/tao-bai-hoc">
                        <Typography variant="h6" color="#fff">
                            Thêm bài học
                        </Typography>
                    </Link>
                </Button>
            </Box >


            <Paper >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontSize: 24 }}>
                                <TableCell sx={{ fontSize: "inherit" }}>Tiêu đề</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} >Link</TableCell>
                                {/* <TableCell sx={{ fontSize: "inherit" }} align="center">Chương trình tu học</TableCell> */}
                                <TableCell sx={{ fontSize: "inherit" }} align="left">Bậc học</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="left">Học phần</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">Thứ tự</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        fontSize: 20,
                                        minHeight: 90
                                    }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}> {row.title}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} >{row.url}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="left">{row.level}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="left">{row.chapter}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="center">
                                        <Selection lessonId={row._id} orderLesson={row.order} setOrderLesson={handleSetOrderLesson} />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: "inherit",
                                            display: "flex",
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            minHeight: "inherit"
                                        }} align="right">
                                        <Button variant="contained" sx={{ color: "yellow" }}
                                            onClick={() => handleUpdateLesson(row._id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button sx={{ ml: 1 }} variant="contained" color="error"
                                            onClick={() => handleDeleteLesson(row._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 20, 25, 30]}
                        component="div"
                        count={numberRow}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        // size="large"
                        sx={{
                            '& .css-pdct74-MuiTablePagination-selectLabel': { fontSize: 24 },
                            '& .css-16c50h-MuiInputBase-root-MuiTablePagination-select': { fontSize: 24 },
                            '& .css-levciy-MuiTablePagination-displayedRows': { fontSize: 24 },
                            '& .css-i4bv87-MuiSvgIcon-root': { fontSize: '2.5rem' }
                        }}
                    />
                </TableContainer >
                <Toastify />
            </Paper>
        </>
    );
}