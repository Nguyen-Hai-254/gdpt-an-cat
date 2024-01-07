import React from "react";
import "./tableOfContent.scss";
import huyhieu from "../../assests/images/huyhieugdpt.jpg";
import { Link } from "react-router-dom";

const TuHoc = () => {

    return (
        <div>
            <div className="table_of_content_body">
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-dong">
                            <img className="img" src={huyhieu} alt="Ngành Đồng" />
                            <h4>Ngành Đồng</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu">
                            <img className="img" src={huyhieu} alt="Ngành Thiếu" />
                            <h4>Ngành Thiếu</h4>
                        </Link>
                    </div>
                </div>
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thanh">
                            <img className="img" src={huyhieu} alt="Ngành Thanh" />
                            <h4>Ngành Thanh</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/huynh-truong">
                            <img className="img" src={huyhieu} alt="Huynh Trưởng" />
                            <h4>Huynh Trưởng</h4>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default TuHoc;