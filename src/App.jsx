import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import NganhThieu from './pages/TuHoc/nganhThieu';
import { huongThien } from './utils/huongThienData';
import HuongThien from './pages/MucLuc/huongThien';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<Home />}
                />

                <Route
                    path="tu-hoc/nganh-thieu"
                >
                    <Route
                        index
                        element={<NganhThieu />}
                    />
                    <Route
                        path="huong-thien"
                        exact
                        element={<HuongThien />}
                    />
                    <Route
                        path="so-thien"
                        exact
                        element={<HuongThien />}
                    />
                </Route>
            </Routes>
        </Router>
    )
}

export default App