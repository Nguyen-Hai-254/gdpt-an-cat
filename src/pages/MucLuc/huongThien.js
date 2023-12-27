import { Navigation } from "../../components/navigation"
// import HuongThienSidebar from "../../components/sidebar/huongThienSidebar";
// import { huongThien } from "../../utils/huongThienData";
import MucLucHuongThien from "../../components/content/MucLucHuongThien";

const HuongThien = () => {
    
    return (
        <div>
            <Navigation />
            {/* <HuongThienSidebar /> */}
            <MucLucHuongThien />

        </div>
    )
}

export default HuongThien