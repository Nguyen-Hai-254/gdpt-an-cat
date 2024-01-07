import React from "react";
import "./tableOfContent.scss";
import { Link } from "react-router-dom";

const NganhDong = () => {

    return (
        <div>
            <div className="table_of_content_body">
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-dong/mo-mat">
                            <img className="img"
                                src={require("../../assests/images/nganh-dong/momat.jpg")}
                                alt="Mở Mắt" />
                            <h4>Mở Mắt</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-dong/chan-cung">
                            <img className="img"
                                src={require("../../assests/images/nganh-dong/chancung.jpg")}
                                alt="Chân Cứng" />
                            <h4>Chân Cứng</h4>
                        </Link>
                    </div>
                </div>
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-dong/canh-mem">
                            <img className="img"
                                src={require("../../assests/images/nganh-dong/canhmem.jpg")}
                                alt="Cánh Mềm" />
                            <h4>Cánh Mềm</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-dong/tung-bay">
                            <img className="img"
                                src={require("../../assests/images/nganh-dong/tungbay.jpg")}
                                alt="Tung Bay" />
                            <h4>Tung Bay</h4>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default NganhDong;