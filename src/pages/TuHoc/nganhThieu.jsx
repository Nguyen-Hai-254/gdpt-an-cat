import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/navigation";
import "./tableOfContent.scss";
import huyhieu from "../../assests/images/huyhieugdpt.jpg";
import { useLocation } from 'react-router-dom';
import { tuHoc } from "../../utils/tuHoc";

const TableOfContent = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        tuHoc.map((item, index) => {
            if (item.url === location.pathname && item.subSubmenu) {
                setData(item.subSubmenu)
            }
        })
    })

    return (
        <div>
            <Navigation />
            <div className="table_of_content_body">
                <div className="content_row_card">
                    <div className="content_card">
                        <a href="/tu-hoc/nganh-thieu/huong-thien">
                            <img className="img" src={huyhieu} alt="Hướng Thiện" />
                            <h4>Hướng Thiện</h4>
                        </a>
                    </div>
                    <div className="content_card">
                        <a href="/tu-hoc/nganh-thieu/so-thien">
                            <img className="img" src={huyhieu} alt="Sơ Thiện" />
                            <h4>Sơ Thiện</h4>
                        </a>
                    </div>
                </div>
                <div className="content_row_card">
                    <div className="content_card">
                        <a href="/tu-hoc/nganh-thieu/trung-thien">
                            <img className="img" src={huyhieu} alt="Trung Thiện" />
                            <h4>Trung Thiện</h4>
                        </a>
                    </div>
                    <div className="content_card">
                        <a href="/tu-hoc/nganh-thieu/chanh-thien">
                            <img className="img" src={huyhieu} alt="Chánh Thiện" />
                            <h4>Chánh Thiện</h4>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default TableOfContent;