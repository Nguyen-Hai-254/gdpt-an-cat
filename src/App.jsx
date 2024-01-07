import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

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

const App = () => {
    const location = useLocation();
    const [mucLucMoMat, setMucLucMoMat] = useState([]);
    const [mucLucChanCung, setMucLucChanCung] = useState([]);
    const [mucLucCanhMem, setMucLucCanhMem] = useState([]);
    const [mucLucTungBay, setMucLucTungBay] = useState([]);

    const [mucLucHuongThien, setMucLucHuongThien] = useState([]);
    const [mucLucSoThien, setMucLucSoThien] = useState([]);
    const [mucLucTrungThien, setMucLucTrungThien] = useState([]);
    const [mucLucChanhThien, setMucLucChanhThien] = useState([]);

    useEffect(async () => {
        const fetchTableOfContentStudy = async (level) => {
            try {
                const res = await getTableOfContentStudy(level);
                return res.data
                // setMucLucHuongThien(res.data);
            } catch (e) {
                console.error(e.message);
            }
        }

        setMucLucMoMat(await fetchTableOfContentStudy('Mở Mắt'));
        setMucLucChanCung(await fetchTableOfContentStudy('Chân Cứng'));
        setMucLucCanhMem(await fetchTableOfContentStudy('Cánh Mềm'));
        setMucLucTungBay(await fetchTableOfContentStudy('Tung Bay'));

        setMucLucHuongThien(await fetchTableOfContentStudy('Hướng Thiện'));
        setMucLucSoThien(await fetchTableOfContentStudy('Sơ Thiện'));
        setMucLucTrungThien(await fetchTableOfContentStudy('Trung Thiện'));
        setMucLucChanhThien(await fetchTableOfContentStudy('Chánh Thiện'));
    }, [])
    console.log(location.pathname)
    return (
        // <Router>
        <>
            <Toastify />
            {(location) => location.pathname !== '/login' ? <Navigation />: null}
            {/* <Navigation pathname={location.pathname}/> */}

            <Container sx={{ minHeight: "80vh", maxWidth: '100% !important' }}>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Home />}
                    />

                    {/* <Route
                        element={(location) => ['/login'].includes(location.pathname)
                            ? <Navigation />
                            : <Navigation />
                        }
                    /> */}

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
                        path="/study"
                        exact
                        element={<TuHoc />}
                    />

                    <Route
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
                    </Route>

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Container>


            <Footer />
        </>
        //  </Router > 
    )
}

export default App