import "./content.scss";
import { huongThien } from "../../utils/huongThienData";
import { useEffect, useState } from "react";


const MucLucHuongThien = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await setData(huongThien);
        }

        fetchData()
    }, [data])

    return (
        <div className="muc_luc_content">
            {data && data.length !== 0 ?
                data?.map((item, index) => {
                    return (
                        <div key={index} className="chapter_content">
                            <h2 className="chapter_title">{item.title}</h2>
                            <ol>
                                {item.baiHoc.map((baiHoc, index2) => {
                                    return (
                                        <li key={index2}>{baiHoc.title}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    )
                })
                : <div>Tính năng này đang được phát triển</div>

            }
        </div>
    )
}

export default MucLucHuongThien;