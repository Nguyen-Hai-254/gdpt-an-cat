import React from "react";
import "./tableOfContent.scss";
import { Link } from "react-router-dom";

const TableOfContent = () => {

    return (
        <div>
            <div className="table_of_content_body">
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu/huong-thien">
                            <img className="img"
                                src={require("../../assests/images/nganh-thieu/huongthien.jpg")}
                                alt="Hướng Thiện" />
                            <h4>Hướng Thiện</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu/so-thien">
                            <img className="img"
                                src={require("../../assests/images/nganh-thieu/sothien.jpg")}
                                alt="Sơ Thiện" />
                            <h4>Sơ Thiện</h4>
                        </Link>
                    </div>
                </div>
                <div className="content_row_card">
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu/trung-thien">
                            <img className="img"
                                src={require("../../assests/images/nganh-thieu/trungthien.jpg")}
                                alt="Trung Thiện" />
                            <h4>Trung Thiện</h4>
                        </Link>
                    </div>
                    <div className="content_card">
                        <Link to="/tu-hoc/nganh-thieu/chanh-thien">
                            <img className="img"
                                src={require("../../assests/images/nganh-thieu/chanhthien.jpg")}
                                alt="Chánh Thiện" />
                            <h4>Chánh Thiện</h4>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default TableOfContent;