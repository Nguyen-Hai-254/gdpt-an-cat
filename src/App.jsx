import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Home from "./pages/home";
import NganhThieu from './pages/TuHoc/nganhThieu';
import MucLuc from './pages/MucLuc/MucLuc';
import NotFound from './pages/404/NotFound';
import TuHoc from './pages/TuHoc/tuHoc';
import NganhDong from './pages/TuHoc/nganhDong';
import { Navigation } from './components/navigation';
import CreateLesson from './pages/Admin/createLesson';
import BaiHocChiTiet from './pages/BaiHocChiTiet/BaiHocChiTiet';
import { useEffect, useState } from 'react';
import { getTableOfContentStudy } from './api/lessonApi';
import Footer from './components/footer';
import { Container } from '@mui/material';
import LessonManagement from './pages/Admin/lessonManagement';
import Toastify from './components/toastify/toastify';
import Account from './pages/account/account';
import { useSelector } from 'react-redux';
import ScrollToTop from './components/scroll';
import LongHieuChimOanhVu from './pages/chuyenTienThan/LongHieuChimOanhVu';
import CreateExam from './pages/Admin/Reference/createExam';
import ExamManagement from './pages/Admin/Reference/examManagement';
import GameManagement from './pages/Admin/game/gameManagement';
import TroChoi from './pages/tuLieuThamKhao/troChoi';
import MatThuManagement from './pages/Admin/matThu/matThuManagement';
import CreateMatThu from './pages/Admin/matThu/createMatThu';
import MatThuUser from './pages/matThu/matThuUser';
import AuthWrapper from './components/AuthWrapper';
import Profile from './pages/profile/profile';


const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.access_token);

    const [mucLucMoMat, setMucLucMoMat] = useState([]);
    const [mucLucChanCung, setMucLucChanCung] = useState([]);
    const [mucLucCanhMem, setMucLucCanhMem] = useState([]);
    const [mucLucTungBay, setMucLucTungBay] = useState([]);

    const [mucLucHuongThien, setMucLucHuongThien] = useState([]);
    const [mucLucSoThien, setMucLucSoThien] = useState([]);
    const [mucLucTrungThien, setMucLucTrungThien] = useState([]);
    const [mucLucChanhThien, setMucLucChanhThien] = useState([]);

    useEffect(() => {
        const fetchTableOfContentStudy = async (level) => {
            try {
                const res = await getTableOfContentStudy(level);
                switch (level) {
                    case 'Mở Mắt':
                        setMucLucMoMat(res.data);
                        break;
                    case 'Chân Cứng':
                        setMucLucChanCung(res.data);
                        break;
                    case 'Cánh Mềm':
                        setMucLucCanhMem(res.data);
                        break;
                    case 'Tung Bay':
                        setMucLucTungBay(res.data);
                        break;

                    case 'Hướng Thiện':
                        setMucLucHuongThien(res.data);
                        break;
                    case 'Sơ Thiện':
                        setMucLucSoThien(res.data);
                        break;
                    case 'Trung Thiện':
                        setMucLucTrungThien(res.data);
                        break;
                    case 'Chánh Thiện':
                        setMucLucChanhThien(res.data);
                        break;
                }
                return res.data
            } catch (e) {
                console.error(e.message);
            }
        }

        fetchTableOfContentStudy('Mở Mắt')
        fetchTableOfContentStudy('Chân Cứng')
        fetchTableOfContentStudy('Cánh Mềm')
        fetchTableOfContentStudy('Tung Bay')

        fetchTableOfContentStudy('Hướng Thiện')
        fetchTableOfContentStudy('Sơ Thiện')
        fetchTableOfContentStudy('Trung Thiện')
        fetchTableOfContentStudy('Chánh Thiện')
    }, [])

    return (
        // <Router>
        <>
            <Toastify />
            <ScrollToTop />
            {location.pathname !== '/login' ? <Navigation /> : null}

            <Container sx={{
                minHeight: "80vh",
                maxWidth: '100% !important',
                mt: 5,
                pl: "0 !important",
                pr: "0 !important",
                pb: 5
            }}>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Home />}
                    />

                    <Route
                        path="/login"
                        exact
                        element={<Account />}
                    />

                    <Route path='tu-hoc'>
                        <Route
                            index
                            element={<TuHoc />}
                        />
                        <Route path="nganh-dong">
                            <Route
                                index
                                element={<NganhDong />}
                            />
                            <Route
                                path="mo-mat"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Mở Mắt'} />}
                                />
                                {mucLucMoMat.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Mở Mắt'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="chan-cung"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Chân Cứng'} />}
                                />
                                {mucLucChanCung.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Chân Cứng'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="canh-mem"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Cánh Mềm'} />}
                                />
                                {mucLucCanhMem.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Cánh Mềm'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="tung-bay"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Tung Bay'} />}
                                />
                                {mucLucTungBay.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Tung Bay'} />}
                                        />
                                    )
                                })}
                            </Route>
                        </Route>

                        <Route path="nganh-thieu">
                            <Route
                                index
                                element={<NganhThieu />}
                            />
                            <Route
                                path="huong-thien"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Hướng Thiện'} />}
                                />
                                {mucLucHuongThien.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Hướng Thiện'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="so-thien"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Sơ Thiện'} />}
                                />
                                {mucLucSoThien.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Sơ Thiện'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="trung-thien"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Trung Thiện'} />}
                                />
                                {mucLucTrungThien.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Trung Thiện'} />}
                                        />
                                    )
                                })}
                            </Route>

                            <Route
                                path="chanh-thien"
                                exact
                            >
                                <Route
                                    index
                                    element={<MucLuc level={'Chánh Thiện'} />}
                                />
                                {mucLucChanhThien.map((lesson, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={lesson.url}
                                            exact
                                            element={<BaiHocChiTiet lessonId={lesson._id} level={'Chánh Thiện'} />}
                                        />
                                    )
                                })}
                            </Route>
                        </Route>
                    </Route>



                    <Route
                        path="/tu-lieu-tham-khao"
                        exact
                    >
                        <Route
                            index
                            element={<TuHoc />}
                        />
                        <Route
                            path="cau-chuyen-tien-than"
                            exact
                        >
                            <Route
                                index
                                element={<TuHoc />}
                            />
                            <Route
                                path="long-hieu-cua-chim-oanh-vu"
                                exact
                                element={<LongHieuChimOanhVu />}
                            ></Route>
                        </Route>

                        <Route
                            path='tro-choi'
                            exact
                            element={<TroChoi />}>
                        </Route>
                    </Route>

                    <Route element={<AuthWrapper />}>
                        <Route
                            path="mat-thu"
                            exact
                            element={<MatThuUser />}
                        />

                        <Route
                            path="profile"
                            exact
                        >
                            <Route
                                index
                                element={<Profile />} >
                            </Route>
                        </Route>
                    </Route>


                    <Route element={<AuthWrapper />}>
                        <Route Route
                            path="/admin"
                            exact
                        >
                            <Route
                                index
                                element={<LessonManagement />} >
                            </Route>
                            <Route
                                path='tao-bai-hoc'
                                exact
                                element={<CreateLesson />}
                            >
                            </Route>
                            <Route
                                path='chinh-sua-bai-hoc/:lessonId'
                                exact
                                element={<CreateLesson />}
                            ></Route>

                            <Route
                                path="tu-lieu-tham-khao"
                                exact
                            >
                                <Route
                                    index
                                    element={<ExamManagement />} >
                                </Route>
                                <Route
                                    path='tao-de-thi'
                                    exact
                                    element={<CreateExam />}
                                ></Route>

                                <Route
                                    path='chinh-sua-tro-choi'
                                    exact
                                    element={<GameManagement />}
                                ></Route>
                            </Route>

                            <Route
                                path="mat-thu"
                                exact
                            >
                                <Route
                                    index
                                    element={<MatThuManagement />}>
                                </Route>
                                <Route
                                    path='tao-mat-thu'
                                    exact
                                    element={<CreateMatThu />}
                                >
                                </Route>
                                <Route
                                    path='chinh-sua-mat-thu/:matThuId'
                                    exact
                                    element={<CreateMatThu />}
                                />
                            </Route>
                        </Route>



                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Route>
                </Routes>
            </Container >

            {location.pathname !== '/login' ? <Footer /> : null}
        </>
        //  </Router > 
    )
}

export default App