import { useEffect } from "react";
import { getMatThu } from "../../api/userApi";


const MatThu = () => {
    useEffect(() => {
        const fetchData = async () => {
            const res = await getMatThu();
            console.log(res);
        }

        fetchData();
    }, [])

    return (
        <div>Hoạt động thú vị này sẽ được phát triển trong thời gian sớm nhất.</div>
    )
}

export default MatThu;