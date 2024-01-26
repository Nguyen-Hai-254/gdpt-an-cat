
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Toastify from "../../../components/toastify/toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteMatThu, getAllMatThu } from "../../../api/matThuApi";
import DOMPurify from "dompurify";

function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html.slice(0, 600))
        // html.text()
    }
}

const MatThuManagement = () => {
    const token = useSelector((state) => state.auth.access_token);
    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rows, setRows] = useState([]);

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
        const fetchData = async (skip, limit) => {
            try {
                const res = await getAllMatThu(skip, limit);
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
            fetchData(skip, limit)
        }

    }, [skip, limit])

    const handleDeleteMatThu = async (matThuId) => {
        try {
            const res = await deleteMatThu(matThuId);
            if (res.statusCode === 200) {
                toast.success(res.message);

                const newRows = rows.filter((row) => row._id !== matThuId);
                setRows(newRows);
            }
        } catch (e) {
            if (e.response.status) {
                toast.error(e.response.data)
            }
        }
    }

    const handleUpdateMatThu = (matThuId) => {
        navigate(`/admin/mat-thu/chinh-sua-mat-thu/${matThuId}`);
    }

    return (
        <Container sx={{ minWidth: "100%", pl: "10px", pr: "10px" }}>
            <Typography variant="h2">Quản lý mật thư</Typography>

            <Box sx={{ display: "flex" }}>
                <Button size="large" variant="contained" sx={{
                    margin: "auto 0 auto auto"
                }}
                >
                    <Link to="/admin/mat-thu/tao-mat-thu">
                        <Typography variant="h6" color="#fff">
                            Thêm mật thư
                        </Typography>
                    </Link>
                </Button>
            </Box >


            <Paper sx={{ mt: 3 }} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontSize: 24 }}>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">STT</TableCell>
                                <TableCell sx={{ fontSize: "inherit", overflow: "hidden", width: "24%" }} align="left">OTT</TableCell>
                                <TableCell sx={{ fontSize: "inherit", overflow: "hidden", width: "24%" }} align="left">NW</TableCell>
                                <TableCell sx={{ fontSize: "inherit", overflow: "hidden", width: "24%" }} align="left">BV</TableCell>
                                <TableCell sx={{ fontSize: "inherit" }} align="center">Số người vượt qua</TableCell>
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
                                    <TableCell sx={{ fontSize: "inherit" }} align="center">{row.STT}</TableCell>
                                    <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}>
                                        {/* <Box mt={0}
                                            className="preview"
                                            dangerouslySetInnerHTML={createMarkup(row.OTT)}
                                            sx={{ overflow: "scroll" }}
                                        >
                                        </Box> */}
                                        <Box mt={0}
                                            className="preview"
                                            dangerouslySetInnerHTML={{ __html: row.OTT }}
                                            sx={{ overflow: "hidden", maxHeight: "55px" }}>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} >
                                        {/* <Box mt={0}
                                            className="preview"
                                            dangerouslySetInnerHTML={createMarkup(row.NW)}>
                                        </Box> */}
                                        <Box mt={0}
                                            className="preview"
                                            dangerouslySetInnerHTML={{ __html: row.NW }}
                                            sx={{ overflow: "hidden", maxHeight: "55px" }}>
                                        </Box>
                                        <p>{row.NW.innerHTML}</p>
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="left">
                                        {row.BV.length > 30 ? row.BV.slice(0, 30) + "..." : row.BV}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "inherit" }} align="center">{row.userCount}</TableCell>
                                    {/* <TableCell sx={{ fontSize: "inherit" }} align="center">
                                        <Selection lessonId={row._id} orderLesson={row.order} setOrderLesson={handleSetOrderLesson} />
                                    </TableCell> */}
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
                                            onClick={() => handleUpdateMatThu(row._id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button sx={{ ml: 1 }} variant="contained" color="error"
                                            onClick={() => handleDeleteMatThu(row._id)}
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
            </Paper >
        </Container>
    );
}

export default MatThuManagement;