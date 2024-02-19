import { Box, Typography } from "@mui/material";
import longHieuChimOanhVu from "../assests/images/chuyen-tien-than/long-hieu-chim-ov.jpg"
import cuChi from "../assests/images/chuyen-tien-than/cu-chi-nhan-tu-cua-chim-ov.jpg"
import capMat from "../assests/images/chuyen-tien-than/cap-mat-thai-tu-cau-thi-na-1933.jpg"

import troChoi from "../assests/images/trochoi/trochoi.jpg"
import ducPhat from "../assests/images/duc-phat.jpg"
import deThi from "../assests/images/mot-so-de-thi/mot-so-de-thi.jpg"
import vuonLam from "../assests/images/vuonlam.jpg"
import oanh from "../assests/images/gdpt_ketdoan.jpg"
import thieu from "../assests/images/thieu.png"

import moMat from "../assests/images/nganh-dong/momat.jpg"
import chanCung from "../assests/images/nganh-dong/chancung.jpg"
import canhMem from "../assests/images/nganh-dong/canhmem.jpg"
import tungBay from "../assests/images/nganh-dong/tungbay.jpg"

import huongThien from "../assests/images/nganh-thieu/huongthien.jpg"
import soThien from "../assests/images/nganh-thieu/sothien.jpg"
import trungThien from "../assests/images/nganh-thieu/trungthien.jpg"
import chanhThien from "../assests/images/nganh-thieu/chanhthien.jpg"

import { Link } from "react-router-dom";


const SidebarRight = () => {
    return (
        <Box sx={{
            minWidth: { md: '20%' },
            display: { xs: 'none', md: 'flex' },
            position: "relative",
            flexDirection: 'column',
            ml: "35px",
        }}>
            <Box sx={{
                // width: "350px",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/tu-hoc/nganh-dong'>
                    <Box sx={{
                        backgroundImage: `url(${oanh})`,
                        height: "200px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        },
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize",
                    }}
                        className='title'>
                        Bậc học ngành Oanh
                    </Typography>
                </Link>
            </Box >

            <Box sx={{
                // height: "450px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                p: '7px'
            }}>
                <Box>
                    <Link to='/tu-hoc/nganh-dong/mo-mat' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${moMat})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",
                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Mở Mắt
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-dong/chan-cung' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${chanCung})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Chân Cứng
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-dong/canh-mem' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${canhMem})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Cánh Mềm
                        </Typography>
                    </Link>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-dong/tung-bay' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${tungBay})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Tung Bay
                        </Typography>
                    </Link>
                </Box>
            </Box>

            <Box sx={{
                // width: "350px",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/tu-lieu-tham-khao/cau-chuyen-tien-than'>
                    <Box sx={{
                        backgroundImage: `url(${ducPhat})`,
                        height: "200px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        },
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize",
                    }}
                        className='title'>
                        Câu chuyện tiền thân
                    </Typography>
                </Link>
            </Box >

            <Box sx={{
                // height: "450px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                p: '7px'
            }}>
                <Box>
                    <Link to='/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${longHieuChimOanhVu})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",
                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Lòng hiếu chim oanh Vũ
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-lieu-tham-khao/cau-chuyen-tien-than/cu-chi-nhan-tu-cua-chim-oanh-vu' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${cuChi})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Cử chỉ nhân từ của chim oanh Vũ
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-lieu-tham-khao/cau-chuyen-tien-than/cap-mat-thai-tu-cau-na-la' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${capMat})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Cặp mắt thái tử Câu na la
                        </Typography>
                    </Link>
                </Box>
            </Box>

            <Box sx={{
                // width: "100%",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/tu-lieu-tham-khao/tro-choi'>
                    <Box sx={{
                        backgroundImage: `url(${troChoi})`,
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        }
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize"
                    }}
                        className='title'>
                        Trò chơi sinh hoạt
                    </Typography>
                </Link>
            </Box>

            <Box sx={{
                // width: "100%",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/tu-lieu-tham-khao/cau-chuyen-tien-than/long-hieu-cua-chim-oanh-vu'>
                    <Box sx={{
                        backgroundImage: `url(${deThi})`,
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        }
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize"
                    }}
                        className='title'>
                        Đề thi các bậc
                    </Typography>
                </Link>
            </Box>

            <Box sx={{
                // width: "100%",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/goc-vuon-lam'>
                    <Box sx={{
                        backgroundImage: `url(${vuonLam})`,
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        }
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize"
                    }}
                        className='title'>
                        Góc vườn lam
                    </Typography>
                </Link>
            </Box>

            <Box sx={{
                // width: "350px",
                height: "200px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",

                '&:hover .img': {
                    transform: "scale(1.3) rotate(3deg)",
                },

                '&:hover .title': {
                    color: '#00a856'
                }
            }}>
                <Link to='/tu-hoc/nganh-thieu'>
                    <Box sx={{
                        backgroundImage: `url(${thieu})`,
                        height: "200px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                        transition: "all .7s ease",

                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: "30%",
                            width: "100%",
                            height: "70%",
                            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)"
                        },
                    }} className='img'>
                    </Box>
                    <Typography varient="h4" sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                        color: "#fff",
                        textShadow: "0 2px 2px rgba(0,0,0,.5)",
                        position: "absolute",
                        top: "60%",
                        zIndex: 2,
                        display: "inline-block",
                        padding: "15px 15px",
                        textTransform: "capitalize",
                    }}
                        className='title'>
                        Bậc học ngành Thiếu
                    </Typography>
                </Link>
            </Box >

            <Box sx={{
                // height: "450px",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "4px",
                position: "relative",
                marginBottom: "20px",
                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                p: '7px'
            }}>
                <Box>
                    <Link to='/tu-hoc/nganh-thieu/huong-thien' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${huongThien})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",
                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Hướng Thiện
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-thieu/so-thien' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${soThien})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Sơ Thiện
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-thieu/trung-thien' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${trungThien})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Trung Thiện
                        </Typography>
                    </Link>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Link to='/tu-hoc/nganh-thieu/chanh-thien' style={{ display: "flex" }}>
                        <Box sx={{
                            backgroundImage: `url(${chanhThien})`,
                            height: "70px",
                            width: "70px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "4px",
                            transition: "all .7s ease",

                        }}>
                        </Box>
                        <Typography varient="h4" sx={{
                            fontSize: "1em",
                            fontWeight: "700",
                            color: "#333",
                            textShadow: "0 1px 1px rgba(0,0,0,.5)",
                            zIndex: 2,
                            textTransform: "capitalize",
                            alignSelf: 'center',
                            pl: '7px',

                            '&:hover': {
                                color: '#00a856'
                            }
                        }}>
                            Chánh Thiện
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box >
    )
}

export default SidebarRight;