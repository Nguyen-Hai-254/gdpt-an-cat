import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteLessonById } from "../../../api/adminApi";
import { toast } from "react-toastify";
import Toastify from "../../../components/toastify/toastify";
import 'react-toastify/dist/ReactToastify.css';
import { orderUser, typeRole } from "../../../utils/tuHoc";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser } from "../../../api/userApi";
import moment from "moment";

export default function UserManagement() {
    const token = useSelector((state) => state.auth.access_token);
    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rows, setRows] = useState([]);

    const [role, setRole] = useState(typeRole[1].value);
    const [order, setOrder] = useState('');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
        setPage(0);
        setSkip(0);
    };

    const handleChangeOrder = (event) => {
        setOrder(event.target.value);
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

    useEffect(() => {
        const fetchData = async (skip, limit, role, order) => {
            try {
                const res = await getAllUser(skip, limit, role, order);
                console.log(res)
                setRows(res.data.data);
                setNumberRow(res.data.count);
            } catch (e) {
                console.log(e)
            }
        }

        if (!token) {
            navigate('/login');
        }
        else {
            fetchData(skip, limit, role, order)
        }

    }, [skip, limit, role, order])

    const handleDeleteLesson = async (lessonId) => {
        try {
            const res = await deleteLessonById(lessonId);
            if (res.statusCode === 200) {
                toast.success(res.message);

                const newRows = rows.filter((row) => row._id !== lessonId);
                setRows(newRows);
            }
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    const handleUpdateLesson = (lessonId) => {
        navigate(`chinh-sua-bai-hoc/${lessonId}`);
    }

    return (
        <Container sx={{ minWidth: "100%", pl: "10px", pr: "10px" }}>
            <Typography variant="h2">Quản lý người dùng</Typography>

            <Box sx={{ display: "flex" }}>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ fontSize: 14 }}>Vai trò của người dùng</InputLabel>
                    <Select
                        value={role}
                        onChange={handleChangeRole}
                        autoWidth
                        sx={{ fontSize: 16, minWidth: "200px" }}
                    >
                        {typeRole.map((role, index) => {
                            return (
                                <MenuItem key={index} value={role.value} sx={{minWidth: "200px"}}>
                                    <em style={{ width: "180px" }}>{role.value}</em>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel sx={{ fontSize: 14 }}>Sắp xếp theo</InputLabel>
                    <Select
                        value={order}
                        onChange={handleChangeOrder}
                        autoWidth
                        sx={{ fontSize: 16 }}
                    >
                        {orderUser.map((order, index) => {
                            return (
                                <MenuItem key={index} value={order.value}>
                                    <em>{order.key}</em>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button size="large" variant="contained" sx={{
                    margin: "auto 0 auto auto"
                }}
                >
                    <Link to="tao-nguoi-dung">
                        <Typography variant="h6" color="#fff">
                            Thêm người dùng
                        </Typography>
                    </Link>
                </Button>
            </Box >


            <Paper >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontSize: 24 }}>
                                <TableCell sx={{ fontSize: "inherit" }}>Tên</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }}>Email</TableCell>
                                <TableCell sx={{ fontSize: "inherit", lineHeight: "2.5rem" }} align="left">Đăng nhập lần cuối</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="left">Mật thư</TableCell>
                                <TableCell sx={{ fontSize: "inherit", lineHeight: "2.5rem" }} align="center">Ngày tạo tài khoản</TableCell>
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
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}> {row.name}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} >{row.email}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="left">{moment(row.lastLogin).format("DD-MM-YYYY HH:MM:ss")}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="left">{row.matThu}</TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="center">
                                        {moment(row.createAt).format("DD-MM-YYYY HH:MM:ss")}
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
        </Container>
    );
}